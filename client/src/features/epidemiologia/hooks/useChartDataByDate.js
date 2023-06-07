import { useQuery } from "react-query";
import { api } from "../../../shared/services/api";

const fetchData = async (date) => {
  const {data} = await api.get("/vitima/estatisticas?date=" + date);
  return data;
};

export function useChartDataByDate(date) {
  const query = useQuery({
    queryFn: () => fetchData(date),
    queryKey: ["vitimas_estatisticas", date],
    refetchOnMount: false,
    staleTime: Infinity,
  });

  return query;
}
