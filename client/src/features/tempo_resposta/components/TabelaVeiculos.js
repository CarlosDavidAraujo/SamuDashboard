import styled from "styled-components";
import { Table } from "../../../shared/styles/table";

export function TabelaVeiculos({ temposRespostaPorVeiculo }) {
  return (
    <Container>
      <Scroll>
        <Table>
          <Table.Header>
            <tr>
              <th>Veículo</th>
              <th>QTY-QUS (min)</th>
              <th>QUS-QUY (min)</th>
              <th>QUY-QUU (min)</th>
            </tr>
          </Table.Header>
          <Table.Body>
            {temposRespostaPorVeiculo.mediaVeiculo.map((item, i) => (
              <tr key={i}>
                <td style={{ fontWeight: "700" }}>{item.veiculo}</td>
                <td>{item.qty_qus}</td>
                <td>{item.qus_quy}</td>
                <td>{item.quy_quu}</td>
              </tr>
            ))}
          </Table.Body>
          <Table.Footer>
            <tr>
              <td>Média</td>
              {temposRespostaPorVeiculo.mediaGeral.map((item, i) => (
                <>
                  <td>{item.qty_qus}</td>
                  <td>{item.qus_quy}</td>
                  <td>{item.quy_quu}</td>
                </>
              ))}
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
