import { useQuery } from "react-query";
import { api } from "../../../shared/services/api";

/**
 * Faz uma chamda para a rota `/vitima/estatisticas` do backend
 * @param {*} date Filtro de data 
 * @returns {Object} Um objeto com os dados retornados pelo backend
 */
const fetchData = async (date) => {
  const {data} = await api.get("/vitima/estatisticas?date=" + date);
  return data;
};

/**
 * Gerencia a chamada para o backend que obtem os dados dos graficos 
 * @param {*} date Filtro de data
 * @returns Objeto da query contendo os dados retornados, estados de erro, loading e etc (consutar documentaçao do `react-query`)
 */
export function useChartDataByDate(date) {
  const query = useQuery({
    queryFn: () => fetchData(date),
    queryKey: ["vitimas_estatisticas", date],
    refetchOnMount: false,
    staleTime: Infinity,
  });

  return query;
}
