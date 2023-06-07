import { useQuery } from "react-query";
import { api } from "../../../shared/services/api";

const fetchData = async (date) => {
  const {data} = await api.get('/temporesposta/veiculo?date=' + date);
  return data;
};

export function useTempoRespostaVeiculoQuery(date) {
  const query = useQuery({
    queryFn: () => fetchData(date),
    queryKey: ["tempo-resposta-veiculo", date],
    refetchOnMount: false,
    staleTime: Infinity,
  });

  return query;
}




