const execSQLQuery = require("../utils/execSQLQuery");

const consultaOcorrencias = (connection) => {
  const sqlQuery = `
    SELECT 
      O.OcorrenciaID,
      O.Bairro, 
      OP.OperadorNM, 
      M.MotivoDS, 
      (
        SELECT V.VeiculoDS AS VeiculoDS, V.Status AS Status
        FROM OcorrenciaMovimentacao OM
        LEFT JOIN Veiculos V ON OM.VeiculoID = V.VeiculoID
        WHERE OM.OcorrenciaID = O.OcorrenciaID
        FOR JSON AUTO
      ) AS Veiculos
    FROM Ocorrencia O 
    JOIN OperadoresDados OP ON O.OperadorId = OP.OperadorID 
    JOIN Motivo M ON O.MotivoID = M.MotivoID
    WHERE O.RISCOCOD = 1 
      AND CONVERT(DATE, O.DtHr) = CONVERT(DATE, GETDATE())
    ORDER BY O.DtHr DESC;
  `;
  execSQLQuery(sqlQuery)
    .then((data) => {
      const response = {
        event: "ocorrencia:consulta",
        data: data,
      };
      connection.send(JSON.stringify(response));
    })
    .catch((err) => {
      console.error("Erro ao consultar as ocorrências:", err);
    });
};

const consultaEstatisticasOcorrencias = (connection) => {
  const sqlQuery = `
    SELECT COUNT(*) AS TotalOcorrencias,
    AVG(DATEDIFF(minute, DT_INICIO, DT_FIM)) AS MediaTempoResposta
    FROM TEMPO_RESPOSTA
    WHERE CONVERT(DATE, DT_INICIO) = CONVERT(DATE, GETDATE());
  `;

  execSQLQuery(sqlQuery)
    .then((data) => {
      const response = {
        event: "ocorrencia:estatisticas",
        data: data,
      };
      connection.send(JSON.stringify(response));
    })
    .catch((err) => {
      console.error("Erro ao consultar estatisticas de ocorrências:", err);
    });
};

const geraDadosDoGraficoDeRisco = (connection) => {
  const sqlQuery = `
    SELECT O.RISCOCOD, COUNT(*) AS TotalOcorrencias
    FROM Ocorrencia O
    WHERE O.RISCOCOD BETWEEN 1 AND 5 
        AND CONVERT(DATE, O.DtHr) = CONVERT(DATE, GETDATE())
    GROUP BY O.RISCOCOD;
  `;

  execSQLQuery(sqlQuery)
    .then((data) => {
      const response = {
        event: "ocorrencia:risco",
        data: data,
      };
      connection.send(JSON.stringify(response));
    })
    .catch((err) => {
      console.error("Erro ao consultar dados do grafico de risco", err);
    });
};

const handleOcorrencia = (connection) => {
  consultaOcorrencias(connection);
  consultaEstatisticasOcorrencias(connection);
  geraDadosDoGraficoDeRisco(connection);
};

module.exports = handleOcorrencia;
