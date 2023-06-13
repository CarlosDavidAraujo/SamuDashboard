//components
import { ScrollableTable } from "../../../shared/components/tables/ScrollableTable";

//hooks, utils e contexts
import { useTempoRespostaVeiculoQuery } from "../hooks/useTempoRespostaVeiculoQuery";
import { getTableConfigVeiculo } from "../utils/getTableConfigVeiculo";

export function TabelaVeiculos({ date }) {
  const { isError, isLoading, error, data } =
    useTempoRespostaVeiculoQuery(date);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  const { tableColumns, tableData } = getTableConfigVeiculo(data);

  return <ScrollableTable columns={tableColumns} data={tableData} />;
}

