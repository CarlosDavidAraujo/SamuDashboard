import styled from "styled-components";

import { GraficoVitimaSexo } from "../components/GraficoVitimaSexo";
import { GraficoVitimaTipo } from "../components/GraficoVitimaTipo";
import { GraficoVitimaIdade } from "../components/GraficoVitimaIdade";
import { Input } from "../../../shared/components/inputs/Input";
import { useChartDataByDate } from "../hooks/useChartDataByDate";
import { useMonth } from "../../../shared/hooks/useMonth";

export function EpidemiologiaPage() {
  const {month, handleMonthChange} = useMonth();
  const { error, isError, isLoading, data } = useChartDataByDate(month);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Filters>
        <Input type="month" value={month} onChange={handleMonthChange} />
      </Filters>

      <ChartList>
        <GraficoVitimaSexo chartData={data.dataSexo} />
        <GraficoVitimaTipo chartData={data.dataTipo} />
        <GraficoVitimaIdade chartData={data.dataIdade} />
      </ChartList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Filters = styled.div`
  margin-bottom: 40px;
  display: flex;
`;

const ChartList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 10px;
`;
