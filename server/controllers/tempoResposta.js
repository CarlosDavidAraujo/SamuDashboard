const execSQLQuery = require("../utils/execSQLQuery");

module.exports.consultaTempoRespostaPorVeiculo = async (req, res) => {
  try {
    const { date } = req.query;
    const year = date.split("-")[0]; // Extrai o ano
    const month = date.split("-")[1]; // Extrai o mês

    const queryMediaGeral = `
      SELECT
        AVG(DATEDIFF(minute, OM.EnvioEquipeDT, OM.ChegadaLocalDT)) AS qty_qus,
        AVG(DATEDIFF(minute, OM.SaidaLocalDT, OM.ChegadaDestinoDT)) AS qus_quy,
        AVG(DATEDIFF(minute, OM.ChegadaDestinoDT, OM.RetornoDestinoDT)) AS quy_quu
      FROM
        OcorrenciaMovimentacao OM
      WHERE YEAR(OM.EnvioEquipeDT) = ${year} AND MONTH(OM.EnvioEquipeDT) = ${month}
    `;

    const queryMediaVeiculo = `
      SELECT
          V.VeiculoDS AS veiculo,
          AVG(DATEDIFF(minute, OM.EnvioEquipeDT, OM.ChegadaLocalDT)) AS qty_qus,
          AVG(DATEDIFF(minute, OM.SaidaLocalDT, OM.ChegadaDestinoDT)) AS qus_quy,
          AVG(DATEDIFF(minute, OM.ChegadaDestinoDT, OM.RetornoDestinoDT)) AS quy_quu
      FROM
          OcorrenciaMovimentacao OM
          JOIN Veiculos V ON OM.VeiculoID = V.VeiculoID
      WHERE YEAR(OM.EnvioEquipeDT) = ${year} AND MONTH(OM.EnvioEquipeDT) = ${month}
      GROUP BY
          V.VeiculoDS
    `;

    const [mediaGeral, mediaVeiculo] = await Promise.all([
      execSQLQuery(queryMediaGeral),
      execSQLQuery(queryMediaVeiculo),
    ]);

    const data = { mediaGeral, mediaVeiculo };
    console.log(data);

    res.status(200).json(data);
  } catch (err) {
    console.error("Erro ao consultar tempos resposta por veiculo:", err);
    res.status(500).json({ error: "Ocorreu um erro interno no servidor" });
  }
};

module.exports.consultaTempoRespostaPorUnidadeDestino = async (req, res) => {
  try {
    const { date } = req.query;
    const year = date.split("-")[0]; // Extrai o ano
    const month = date.split("-")[1]; // Extrai o mês

    const queryMediaGeral = `
      SELECT 
      AVG(DATEDIFF(minute, OM.ChegadaDestinoDT, OM.RetornoDestinoDT)) AS tempoResposta
      FROM HISTORICO_DECISAO_GESTORA AS HDG
      INNER JOIN OcorrenciaMovimentacao AS OM ON OM.OcorrenciaID = HDG.OCORRENCIAID
      LEFT JOIN UnidadesDestino AS UD ON HDG.DESTINOID = UD.UnidadeCOD
      INNER JOIN Ocorrencia O ON O.OcorrenciaID = HDG.OCORRENCIAID
      WHERE 
        UD.UnidadeCOD != 90 
        AND YEAR(O.DtHr) = ${year} 
        AND MONTH(O.DtHr) = ${month}
    `;

    const queryMediaUnidade = `
      SELECT 
        HDG.DESTINOID AS DestinoID,
        UD.UnidadeDS AS nome,
      AVG(DATEDIFF(minute, OM.ChegadaDestinoDT, OM.RetornoDestinoDT)) AS tempoResposta
      FROM HISTORICO_DECISAO_GESTORA AS HDG
      INNER JOIN OcorrenciaMovimentacao AS OM ON OM.OcorrenciaID = HDG.OCORRENCIAID
      LEFT JOIN UnidadesDestino AS UD ON HDG.DESTINOID = UD.UnidadeCOD
      INNER JOIN Ocorrencia O ON O.OcorrenciaID = HDG.OCORRENCIAID
      WHERE 
        UD.UnidadeCOD != 90 
        AND YEAR(O.DtHr) = ${year} 
        AND MONTH(O.DtHr) = ${month}
      GROUP BY UD.UnidadeDS, HDG.DESTINOID;
    `;

    const [mediaGeral, mediaUnidade] = await Promise.all([
      execSQLQuery(queryMediaGeral),
      execSQLQuery(queryMediaUnidade),
    ]);
    
    res.status(200).json({ mediaGeral, mediaUnidade });
  } catch (err) {
    console.error("Erro ao consultar tempos resposta por unidade:", err);
    res.status(500).json({ error: "Ocorreu um erro interno no servidor" });
  }
};
