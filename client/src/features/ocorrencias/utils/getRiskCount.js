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
