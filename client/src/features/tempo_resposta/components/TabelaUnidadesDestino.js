import styled from "styled-components";
import { Table } from "../../../shared/styles/table";
import { useTempoRespostaUnidadeQuery } from "../hooks/useTempoRespostaUnidadeQuery";

export function TabelaUnidadesDestino({ date }) {
  const { isError, error, data, isLoading } =
    useTempoRespostaUnidadeQuery(date);

  if (isLoading) {
    return <h3>...Loading</h3>;
  }

  if (isError) {
    return <h3>{error}</h3>;
  }

  return (
    <Container>
      <Scroll>
        <Table>
          <Table.Header>
            <tr>
              <th>Unidade de destino</th>
              <th>Tempo de permanência no hospital (min)</th>
            </tr>
          </Table.Header>
          <Table.Body>
            {data.mediaUnidade.map((item, i) => (
              <tr key={i}>
                <td style={{ fontWeight: "700" }}>{item.unidade}</td>
                <td>{item.tempoResposta}</td>
              </tr>
            ))}
          </Table.Body>
          <Table.Footer>
            <tr>
              <td>Média</td>
              <td>{data.mediaGeral[0].tempoResposta}</td>
            </tr>
          </Table.Footer>
        </Table>
      </Scroll>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-1);
  overflow: hidden;
`;

const Scroll = styled.div`
  max-height: 80vh;
  overflow: auto;
`;
