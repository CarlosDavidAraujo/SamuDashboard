import styled from "styled-components";

export function OcorrenciaEstatisticas({ estatisticas }) {
  return (
    <Container>
      <Item>
        <h5>Total de ligações</h5>
        <h2>{estatisticas && estatisticas.totalOcorrencias}</h2>
      </Item>
      <Item>
        <h5>Tempo resposta</h5>
        <h2>{estatisticas && estatisticas.tempoRespostaMedio} min</h2>
      </Item>
      <Item>
        <h5>Tempo QTY-QUS</h5>
        <h2>{estatisticas && estatisticas.tempoRespostaQTYQUS} min</h2>
      </Item>
      <Item>
        <h5>Tempo QUS-QUY</h5>
        <h2>{estatisticas && estatisticas.tempoRespostaQUSQUY} min</h2>
      </Item>
      <Item>
        <h5>Tempo QUY-QUU</h5>
        <h2>{estatisticas && estatisticas.tempoRespostaQUYQUU} min</h2>
      </Item>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-rows: 70px;
  gap: 10px;
`;

const Item = styled.div`
  padding: 5px 0 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: var(--border-radius-sm);
  background-color: white;
  box-shadow: var(--shadow-1);
  font-weight: 600;
  
  color: var(--text-dark);
  h2 {
    font-weight: 700;
    color: var(--secondary);
  }
`;
