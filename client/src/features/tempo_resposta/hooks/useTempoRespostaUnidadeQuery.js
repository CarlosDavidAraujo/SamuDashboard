import { useQuery } from "react-query";
import { api } from "../../../shared/services/api";

const fetchData = async (date) => {
  const {data} = await api.get('/temporesposta/unidade?date=' + date);
  return data;
};

export function useTempoRespostaUnidadeQuery(date) {
  const query = useQuery({
    queryFn: () => fetchData(date),
    queryKey: ["tempo-resposta-unidade", date],
    refetchOnMount: false,
    staleTime: Infinity,
  });

  return query;
}
