import { useQuery } from "react-query";
import { api } from "../../../shared/services/api";

/**
 * Faz a chamada para a rota /temporesposta/veiculo do backend 
 * @param {*} date O filtro de data dos dados que serão retornados
 * @returns  {Object} um objeto contendo os dados retornados pelo backend
 */
const fetchData = async (date) => {
  const {data} = await api.get('/temporesposta/veiculo?date=' + date);
  return data;
};

/**
 * Hook personalizado para consultar o tempo de resposta por veiculo e armazenar os dados em memoria
 * @param {Date} date - Data para a qual se deseja consultar o tempo de resposta.
 * @returns {Object} - Objeto da query (consultar documentação da biblioteca `react-query` para mais detalhes)
 */
export function useTempoRespostaVeiculoQuery(date) {
  const query = useQuery({
    queryFn: () => fetchData(date),
    queryKey: ["tempo-resposta-veiculo", date],
    refetchOnMount: false,
    staleTime: Infinity,
  });

  return query;
}




