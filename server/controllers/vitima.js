const execSQLQuery = require("../utils/execSQLQuery");
const { obterTotalVitimasPorFaixaEtaria } = require("../utils/obterVitimasPorFaixaEtaria");

module.exports.consultaEstatisticasDeVitimas = (req, res) => {
  const { date } = req.query;
  const year = date.split("-")[0]; // Extrai o ano
  const month = date.split("-")[1]; // Extrai o mês
  
  const sqlQuerySexo = `
    SELECT
      CASE
        WHEN V.Sexo = 1 THEN 'Homens'
        WHEN V.Sexo = 2 THEN 'Mulheres'
        WHEN V.Sexo IS NULL THEN 'Não Informado'
      END AS Sexo,
      COUNT(*) AS TotalVitimas
    FROM Vitimas V
    JOIN Ocorrencia O ON V.OcorrenciaID = O.OcorrenciaID
    WHERE YEAR(O.DtHr) = ${year} AND MONTH(O.DtHr) = ${month}
    GROUP BY V.Sexo
    ORDER BY V.Sexo
  `;

  const sqlQueryTipo = `
    SELECT
      tipos.TipoDS,
      COALESCE(vitimas.TotalVitimas, 0) AS TotalVitimas
    FROM (
      SELECT DISTINCT TipoDS
      FROM Tipo
    ) tipos
    LEFT JOIN (
      SELECT
        t.TipoDS,
        COUNT(v.VitimaID) AS TotalVitimas
      FROM Ocorrencia o
      JOIN Vitimas v ON o.OcorrenciaID = v.OcorrenciaID
      JOIN Tipo t ON o.TipoID = t.TipoID
      WHERE o.OcorrenciaID IN (
        SELECT OcorrenciaID
        FROM Ocorrencia
        WHERE YEAR(DtHr) = ${year} AND MONTH(DtHr) = ${month}
      )
      GROUP BY t.TipoDS
    ) vitimas ON tipos.TipoDS = vitimas.TipoDS
    ORDER BY tipos.TipoDS ASC;
  `;

  const sqlQueryIdade = `
    SELECT Vitimas.Idade
    FROM Vitimas
    JOIN Ocorrencia ON Vitimas.OcorrenciaID = Ocorrencia.OcorrenciaID
    WHERE YEAR(Ocorrencia.DtHr) = ${year} AND MONTH(Ocorrencia.DtHr) = ${month}
  `;

  Promise.all([
    execSQLQuery(sqlQuerySexo),
    execSQLQuery(sqlQueryTipo),
    execSQLQuery(sqlQueryIdade)
  ])
    .then(([dataSexo, dataTipo_, dataIdade_]) => {
      const dataTipo = dataTipo_.slice(1);
      const dataIdade = obterTotalVitimasPorFaixaEtaria(dataIdade_);
      res.status(200).json({ dataSexo, dataTipo, dataIdade });
    })
    .catch((err) => {
      console.error("Erro ao consultar total de vítimas:", err);
      res.status(500).json({ error: "Ocorreu um erro interno no servidor" });
    });
};
