import { useState } from "react";
import { useSocket } from "../../../shared/hooks/useSocket";

/**
 * Hook personalizado para filtrar ocorrências por risco.
 * @returns {Object} Um objeto contendo as seguintes propriedades:
 *   - filters: Um objeto com os filtros disponíveis e seus valores correspondentes.
 *   - filterResult: O resultado do filtro aplicado às ocorrências.
 *   - ocorrencias: Todas as ocorrências obtidas por meio do hook useSocket (correspondem ao resultado sem filtro).
 *   - handleFilterChange: Uma função para lidar com a alteração do filtro selecionado.
 */
export function useFilterByRisk() {
  const filters = {
    Todas: 0,
    "Risco 1": 1,
    "Risco 2": 2,
    "Risco 3": 3,
    "Risco 4": 4,
    "Sem classificação": 90,
  };
  const ocorrencias = useSocket("ocorrencia:consulta");
  const [filterResult, setFilterResult] = useState(null);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    if (value === "Todas") {
      setFilterResult(null);
      return;
    }
    const selectedFilter = ocorrencias.filter(
      (ocorrencia) => ocorrencia.risco === filters[value]
    );
    setFilterResult(selectedFilter);
  };

  return { filters, filterResult, ocorrencias, handleFilterChange };
}
