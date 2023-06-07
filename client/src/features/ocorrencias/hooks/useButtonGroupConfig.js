export function useButtonGroupConfig(
  setFilter,
  ocorrencias,
  ocorrenciasByRisk
) {
  return [
    {
      label: `Todas (${ocorrencias.length})`,
      onClick: () => setFilter(ocorrencias),
    },
    {
      label: `Risco 1 (${ocorrenciasByRisk.risco1?.length})`,
      onClick: () => setFilter(ocorrenciasByRisk.risco1),
    },
    {
      label: `Risco 2 (${ocorrenciasByRisk.risco2?.length})`,
      onClick: () => setFilter(ocorrenciasByRisk.risco2),
    },
    {
      label: `Risco 3 (${ocorrenciasByRisk.risco3?.length})`,
      onClick: () => setFilter(ocorrenciasByRisk.risco3),
    },
    {
      label: `Risco 4 (${ocorrenciasByRisk.risco4?.length})`,
      onClick: () => setFilter(ocorrenciasByRisk.risco4),
    },
    {
      label: `Sem classificação (${ocorrenciasByRisk.risco90?.length})`,
      onClick: () => setFilter(ocorrenciasByRisk.risco90),
    },
  ];
}
