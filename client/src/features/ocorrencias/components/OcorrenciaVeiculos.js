//bibliotecas
import { styled } from "@mui/material";

//componentes
import { OcorrenciaVeiculo } from "./OcorrenciaVeiculo";

export function OcorrenciaVeiculos({ veiculos}) {
  return (
    <Container>
      {veiculos?.map((veiculo, i) => (
        <OcorrenciaVeiculo veiculo={veiculo} key={i}/>
      ))}
    </Container>
  );
}

//--------------------ESTILOS--------------------//

const Container = styled('div')`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
