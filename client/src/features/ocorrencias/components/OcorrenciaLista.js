import styled from "styled-components";
import { OcorrenciaCard } from "./OcorrenciaCard";

export function OcorrenciaLista({ ocorrencias }) {
  return (
    <Container>
      {ocorrencias.map((ocorrencia, key) => (
        <OcorrenciaCard ocorrencia={ocorrencia} key={key} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: max-content;
  gap: 10px;
`;
