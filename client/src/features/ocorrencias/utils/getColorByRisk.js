/**
 * Mapeia os níveis de risco para as cores correspondentes.
 */
const colorByRisk = {
  1: "#d25151",
  2: "#D2C551",
  3: "#51D275",
  4: "#518CD2",
  90: "#333333",
};

/**
 * Retorna a cor correspondente a um determinado nível de risco da ocorrencia.
 * @param {number} risk - O nível de risco.
 * @returns {string} A cor correspondente ao nível de risco.
 */
export function getColorByRisk(risk) {
  return colorByRisk[risk];
}
