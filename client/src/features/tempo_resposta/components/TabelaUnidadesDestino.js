//components
import { ScrollableTable } from "../../../shared/components/tables/ScrollableTable";

//hooks, utils e contexts
import { useTempoRespostaUnidadeQuery } from "../hooks/useTempoRespostaUnidadeQuery";
import { getTableConfigDestino } from "../utils/getTableConfigDestino";

export function TabelaUnidadesDestino({ date }) {
  const { isError, error, data, isLoading } =
    useTempoRespostaUnidadeQuery(date);

  if (isLoading) {
    return <h3>...Loading</h3>;
  }

  if (isError) {
    return <h3>{error}</h3>;
  }

  const { tableColumns, tableData } = getTableConfigDestino(data);

  return <ScrollableTable columns={tableColumns} data={tableData} />;
}

