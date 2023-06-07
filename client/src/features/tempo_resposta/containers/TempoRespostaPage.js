import styled from "styled-components";
import { TabelaVeiculos } from "../components/TabelaVeiculos";
import { useTempoRespostaVeiculoQuery } from "../hooks/useTempoRespostaVeiculoQuery";
import { Input } from "../../../shared/components/inputs/Input";
import { useMonth } from "../../../shared/hooks/useMonth";
import { TabelaUnidadesDestino } from "../components/TabelaUnidadesDestino";

export function TempoRespostaPage() {
  const { month, handleMonthChange } = useMonth();
  const { isError, isLoading, error, data } =
    useTempoRespostaVeiculoQuery(month);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Menu>
        <Input type="month" value={month} onChange={handleMonthChange}/>
      </Menu>
      <Content>
        <TabelaVeiculos temposRespostaPorVeiculo={data} />
        <TabelaUnidadesDestino date={month}/>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const Menu = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  > div {
    flex-grow: 1;
  }
`;
