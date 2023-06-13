/**
Retorna a configuração da tabela para exibir os tempos resposta de cada evento de movimentação por veículo.
@param {object} temposResposta - Objeto contendo os tempos de resposta por veiculo.
@returns {object} Configuração da tabela contendo as colunas e os dados a serem exibidos.
*/
export function getTableConfigVeiculo(temposResposta) {
  const tableColumns = [
    {
      label: "Veículo",
      dataKey: "veiculo",
      emphasis: true,
    },
    {
      label: "QTY-QUS (min)",
      dataKey: "qtyqus",
      numeric: true,
    },
    {
      label: "QUS-QUY (min)",
      dataKey: "qusquy",
      numeric: true,
    },
    {
      label: "QUY-QUU (min)",
      dataKey: "quyquu",
      numeric: true,
    },
  ];

  const tableData = temposResposta.mediaVeiculo.map((item) => ({
    //a key deve ser a mesma do dataKey em tableColumns
    veiculo: item.veiculo,
    qtyqus: item.qty_qus,
    qusquy: item.qus_quy,
    quyquu: item.quy_quu,
  }));

  return { tableColumns, tableData };
}
