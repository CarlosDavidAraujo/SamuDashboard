/**
 * Calcula a contagem de ocorrências por nível de risco.
 * @param {Array} ocorrencias - As ocorrências a serem contadas.
 * @returns {Object} Um objeto contendo a contagem de ocorrências por nível de risco.
 */
export function getRiskCount(ocorrencias) {
  const riskCount = {};
  for (const ocorrencia of ocorrencias) {
    const { risco } = ocorrencia;

    if (riskCount[risco]) {
      riskCount[risco]++;
    } else {
      riskCount[risco] = 1;
    }
  }
  return riskCount;
}
