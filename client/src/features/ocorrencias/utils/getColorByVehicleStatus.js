/**
 * Gera uma cor correspondente ao status do veículo com base nos evetos de movimentação do veículo
 * @param {Object} veiculo - O objeto que representa o veículo.
 * @returns {string} A cor correspondente ao status do veículo.
 */
export function getColorByVehicleStatus(veiculo) {
  if (veiculo.ChegadaBaseDT) {
    return '#0099ff' //azul para veiculso na base
  }
  if (veiculo.RetornoDestinoDT) {
    return '#32a81d' //verde para veiculos livres, mas em trânsito
  }
  return '#ffcc00' //amarelo para ocupado [todos os demais eventos de movimentação]
}