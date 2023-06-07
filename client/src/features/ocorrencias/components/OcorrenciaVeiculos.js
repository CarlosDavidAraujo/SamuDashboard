import styled from "styled-components";
import { OcorrenciaVeiculo } from "./OcorrenciaVeiculo";

export function OcorrenciaVeiculos({ ocorrencia }) {
  const veiculos = JSON.parse(ocorrencia.veiculos);

  return (
    <Container>
      {veiculos?.map((veiculo, i) => (
        <OcorrenciaVeiculo veiculo={veiculo} key={i} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
