const execSQLQuery = require("../utils/execSQLQuery");

const consultaOcorrencias = (connection) => {
  const sqlQuery = `
    SELECT 
      O.OcorrenciaID AS id,
      O.DtHr as horario,
      O.Bairro as bairro, 
      O.RISCOCOD as risco,
      OP.OperadorNM as operador, 
      M.MotivoDS as motivo, 
      --AVI.AVALICAO as avaliacao,
      (
        SELECT 
          V.VeiculoDS AS nome, 
          V.Status AS status,
          OM.EnvioEquipeDT,
          OM.SaidaBaseDT,
          OM.ChegadaLocalDT,
          OM.SaidaLocalDT,
          OM.ChegadaDestinoDT,
          OM.RetornoDestinoDT,
          OM.ChegadaBaseDT
        FROM OcorrenciaMovimentacao OM
        LEFT JOIN Veiculos V ON OM.VeiculoID = V.VeiculoID
        WHERE OM.OcorrenciaID = O.OcorrenciaID
        FOR JSON PATH
      ) AS veiculos
    FROM Ocorrencia O 
    LEFT JOIN OperadoresDados OP ON O.OperadorId = OP.OperadorID 
    JOIN Motivo M ON O.MotivoID = M.MotivoID
    --LEFT JOIN OCORRENCIA_AVALIACAO_INICIAL AVI ON O.OcorrenciaID = AVI.OCORRENCIAID
    -- WHERE CONVERT(DATE, O.DtHr) = CONVERT(DATE, GETDATE())
    ORDER BY O.RISCOCOD ASC, O.DtHr DESC;
  `;
  execSQLQuery(sqlQuery)
    .then((data) => {
      const response = {
        event: "ocorrencia:consulta",
        data: data,
      };
      console.log(data);
      connection.send(JSON.stringify(response));
    })
    .catch((err) => {
      console.error("Erro ao consultar as ocorrências:", err);
    });
};

const consultaEstatisticasOcorrencias = async (connection) => {
  try {
    const queryTotalOcorrencias = `
    SELECT COUNT(*) AS totalOcorrencias                 
    FROM TEMPO_RESPOSTA
    --WHERE CONVERT(DATE, DT_INICIO) = CONVERT(DATE, GETDATE())`;

    const queryTempoRespostaMedio = `
    SELECT AVG(DATEDIFF(minute, DT_INICIO, DT_FIM)) AS tempoRespostaMedio
    FROM TEMPO_RESPOSTA
    --WHERE CONVERT(DATE, DT_INICIO) = CONVERT(DATE, GETDATE())`;

    const queryTemposResposta = `
      SELECT 
        AVG(DATEDIFF(minute, EnvioEquipeDT, ChegadaLocalDT)) AS tempoRespostaQTYQUS,
        AVG(DATEDIFF(minute, SaidaLocalDT, ChegadaDestinoDT)) AS tempoRespostaQUSQUY,
        AVG(DATEDIFF(minute, ChegadaDestinoDT, RetornoDestinoDT)) AS tempoRespostaQUYQUU
      FROM OcorrenciaMovimentacao
    `;

    //executar consultas
    const [
      resultTotalOcorrencias,
      resultTempoRespostaMedio,
      resultTemposResposta,
    ] = await Promise.all([
      execSQLQuery(queryTotalOcorrencias),
      execSQLQuery(queryTempoRespostaMedio),
      execSQLQuery(queryTemposResposta),
    ]);

    //console.log(resultTemposResposta)
    // Processar os resultados
    const totalOcorrencias = resultTotalOcorrencias[0].totalOcorrencias;
    const tempoRespostaMedio = resultTempoRespostaMedio[0].tempoRespostaMedio;
    const tempoRespostaQTYQUS = resultTemposResposta[0].tempoRespostaQTYQUS;
    const tempoRespostaQUSQUY = resultTemposResposta[0].tempoRespostaQUSQUY;
    const tempoRespostaQUYQUU = resultTemposResposta[0].tempoRespostaQUYQUU;

    // envia os resultados
    const response = {
      event: "ocorrencia:estatisticas",
      data: {
        totalOcorrencias,
        tempoRespostaMedio,
        tempoRespostaQTYQUS,
        tempoRespostaQUSQUY,
        tempoRespostaQUYQUU
      },
    };
    connection.send(JSON.stringify(response));
  } catch (err) {
    console.error("Erro ao obter os dados:", err);
    throw err;
  }
};

const handleOcorrencia = (connection) => {
  consultaOcorrencias(connection);
  consultaEstatisticasOcorrencias(connection);
};

module.exports = handleOcorrencia;
