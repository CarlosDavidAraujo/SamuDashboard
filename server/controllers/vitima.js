const execSQLQuery = require("../utils/execSQLQuery");

module.exports.consultaTotalVitimasPorSexo = (req, res) => {
  const {mes} = req.body;
  const sqlQuery = `
    SELECT
      CASE
          WHEN V.Sexo = 1 THEN 'Homens'
          WHEN V.Sexo = 2 THEN 'Mulheres'
          WHEN V.Sexo IS NULL THEN 'Não Informado'
      END AS Sexo,
      COUNT(*) AS TotalVitimas
    FROM
      Vitimas V
    JOIN
      Ocorrencia O ON V.OcorrenciaID = O.OcorrenciaID
    WHERE
      YEAR(O.DtHr) = 2023 AND MONTH(O.DtHr) = ${mes}
    GROUP BY
      V.Sexo;
  `;
  
  execSQLQuery(sqlQuery)
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      console.error("Erro ao consultar total de vitimas por sexo:", err);
    });
};

module.exports.consultaTotalVitimasPorTipo = (req, res) => {
  const {mes} = req.body;
  const sqlQuery = `
    SELECT 
      CASE 
        WHEN t.TipoDS = '**NãO INFORMADO**' THEN 'NÃO INFORMADO'
        ELSE t.TipoDS
      END AS Tipo, 
      COUNT(v.VitimaID) AS TotalVitimas
    FROM Tipo t
    JOIN Ocorrencia o ON o.TipoID = t.TipoID
    JOIN Vitimas v ON v.OcorrenciaID = o.OcorrenciaID
    WHERE YEAR(o.DtHr) = 2023 AND MONTH(o.DtHr) = ${mes}
    GROUP BY t.TipoDS;
  `;
  execSQLQuery(sqlQuery)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(
        "Erro ao consultar total de vitimas por tipo de ocorrencia:",
        err
      );
    });
};

module.exports.consultaTotalVitimasPorIdade = (req, res) => {
  const {mes} = req.body;
  const sqlQuery = `
    SELECT
      faixas.FaixaEtaria,
      COALESCE(COUNT(vitimas.Idade), 0) AS TotalVitimas
    FROM
      (
        SELECT '0-12' AS FaixaEtaria
        UNION ALL
        SELECT '13-18'
        UNION ALL
        SELECT '19-29' 
        UNION ALL
        SELECT '30-39' 
        UNION ALL
        SELECT '40-49' 
        UNION ALL
        SELECT '50-59' 
        UNION ALL
        SELECT '60-69'
        UNION ALL
        SELECT '70-79' 
        UNION ALL
        SELECT '80-89' 
        UNION ALL
        SELECT '90-99' 
        UNION ALL
        SELECT '100+'  
      ) AS faixas
    LEFT JOIN
      Vitimas ON (
        (faixas.FaixaEtaria = '0-9' AND Vitimas.Idade BETWEEN 0 AND 9)
        OR (faixas.FaixaEtaria = '10-19' AND Vitimas.Idade BETWEEN 10 AND 19)
        OR (faixas.FaixaEtaria = '20-29' AND Vitimas.Idade BETWEEN 20 AND 29)
        OR (faixas.FaixaEtaria = '30-39' AND Vitimas.Idade BETWEEN 30 AND 39)
        OR (faixas.FaixaEtaria = '40-49' AND Vitimas.Idade BETWEEN 40 AND 49)
        OR (faixas.FaixaEtaria = '50-59' AND Vitimas.Idade BETWEEN 50 AND 59)
        OR (faixas.FaixaEtaria = '60-69' AND Vitimas.Idade BETWEEN 60 AND 69)
        OR (faixas.FaixaEtaria = '70-79' AND Vitimas.Idade BETWEEN 70 AND 79)
        OR (faixas.FaixaEtaria = '80-89' AND Vitimas.Idade BETWEEN 80 AND 89)
        OR (faixas.FaixaEtaria = '90-99' AND Vitimas.Idade BETWEEN 90 AND 99)
        OR (faixas.FaixaEtaria = '100+' AND Vitimas.Idade >= 100)
      )
    JOIN Ocorrencia ON Vitimas.OcorrenciaID = Ocorrencia.OcorrenciaID
    WHERE YEAR(Ocorrencia.DtHr) = 2023 AND MONTH(Ocorrencia.DtHr) = ${mes}
    GROUP BY faixas.FaixaEtaria
    UNION ALL
    SELECT 'Não informado' AS FaixaEtaria, COUNT(*) AS TotalVitimas
    FROM Vitimas
    WHERE Idade IS NULL;
  `;
  execSQLQuery(sqlQuery)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error("Erro ao constultar total de vitimas por idade:", err);
    });
};
