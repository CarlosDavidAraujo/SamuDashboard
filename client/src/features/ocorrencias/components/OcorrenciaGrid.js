import styled from "styled-components";
import { OcorrenciaCard } from "./OcorrenciaCard";
import { useModalContext } from "../../../contexts/ModalContext";
import { useState } from "react";
import { OcorrenciaModal } from "./OcorrenciaModal";

export function OcorrenciaGrid({ ocorrencias }) {
  const { setIsOpen } = useModalContext();
  const [selectedOcorrencia, setSelectedOcorrencia] = useState();

  const handleOpenOcorrencia = (i) => {
    setSelectedOcorrencia(ocorrencias[i]);
    setIsOpen(true);
  };

  return (
    <Container>
      <Scroll>
        <Grid>
          {ocorrencias.map((ocorrencia, i) => (
            <OcorrenciaCard
              key={i}
              ocorrencia={ocorrencia}
              onClick={() => handleOpenOcorrencia(i)}
            />
          ))}
        </Grid>
      </Scroll>
      {selectedOcorrencia && (
        <OcorrenciaModal ocorrencia={selectedOcorrencia} />
      )}
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`;

const Scroll = styled.div`
  overflow-y: auto;
  height: 80vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: max-content;
  gap: 15px;
`;
