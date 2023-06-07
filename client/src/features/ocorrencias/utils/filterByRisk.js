export function filterByRisk(ocorrencias) {
  const ocorrenciasRisco1 = ocorrencias.filter(
    (ocorrencia) => ocorrencia.risco === 1
  );
  const ocorrenciasRisco2 = ocorrencias.filter(
    (ocorrencia) => ocorrencia.risco === 2
  );
  const ocorrenciasRisco3 = ocorrencias.filter(
    (ocorrencia) => ocorrencia.risco === 3
  );
  const ocorrenciasRisco4 = ocorrencias.filter(
    (ocorrencia) => ocorrencia.risco === 4
  );
  const ocorrenciasRisco90 = ocorrencias.filter(
    (ocorrencia) => ocorrencia.risco === 90
  );

  return {
    risco1: ocorrenciasRisco1,
    risco2: ocorrenciasRisco2,
    risco3: ocorrenciasRisco3,
    risco4: ocorrenciasRisco4,
    risco90: ocorrenciasRisco90,
  };
}
