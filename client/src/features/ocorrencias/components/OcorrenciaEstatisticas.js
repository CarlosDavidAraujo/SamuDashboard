import styled from "styled-components";

export function OcorrenciaEstatisticas({ estatisticas }) {
  return (
    <Container>
      <Item>
        <h5>Total de ligações</h5>
        <h2>{estatisticas && estatisticas.TotalOcorrencias}</h2>
      </Item>
      <Item>
        <h5>Tempo resposta</h5>
        <h2>{estatisticas && estatisticas.MediaTempoResposta} min</h2>
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
  border-radius: var(--border-radius-md);
  background-color: white;
  box-shadow: var(--card-shadow);
`;
