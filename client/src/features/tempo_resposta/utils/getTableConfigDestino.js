/**
Retorna a configuração da tabela para exibir os tempos de permanência no hospital por unidade de destino.
@param {object} temposResposta - Objeto contendo os tempos de resposta por unidade de destino.
@returns {object} Configuração da tabela contendo as colunas e os dados a serem exibidos.
*/
export function getTableConfigDestino(temposResposta) {
  const tableColumns = [
    {
      width: "50%",
      label: "Unidade de destino",
      dataKey: "destino",
      emphasis: true,
    },
    {
      width: "50%",
      label: "Tempo de permanência no hospital (min)",
      dataKey: "tempo",
      numeric: true,
    },
  ];

  const tableData = temposResposta.mediaUnidade.map((unidadeDestino) => ({
    //a key deve ser a mesma do dataKey em tableColumns
    destino: unidadeDestino.nome, 
    tempo: unidadeDestino.tempoResposta,
  }));

  return { tableColumns, tableData };
}
