import styled from "styled-components";
import { formatToPascalCaseWithSpace } from "../../../shared/utils/formatToPascalCase";
import { getColorByRisk } from "../utils/getColorByRisk";
import { OcorrenciaVeiculos } from "./OcorrenciaVeiculos";
import { Table } from "../../../shared/styles/table";
import { useState } from "react";
import { OcorrenciaModal } from "./OcorrenciaModal";
import { useModalContext } from "../../../contexts/ModalContext";

export function OcorrenciaTable({ ocorrencias }) {
  const { setIsOpen } = useModalContext();
  const [selectedOcorrencia, setSelectedOcorrencia] = useState();

  const handleOpenOcorrencia = (i) => {
    setSelectedOcorrencia(ocorrencias[i]);
    setIsOpen(true);
  };

  return (
    <Container>
      <Scroll>
        <Table>
          <Table.Header>
            <tr>
              <th>#</th>
              <th>Motivo</th>
              <th>Médico regulador</th>
              <th>Bairro</th>
              <th>Veículos</th>
            </tr>
          </Table.Header>
          <Table.Body>
            {ocorrencias.map((ocorrencia, i) => (
              <CustomRoll
                risk={ocorrencia.risco}
                onClick={() => handleOpenOcorrencia(i)}
                key={i}
              >
                <td>{ocorrencia.id.slice(-4)}</td>
                <td>{ocorrencia.motivo}</td>
                <td>{ocorrencia.operador}</td>
                <td>{formatToPascalCaseWithSpace(ocorrencia.bairro)}</td>
                <td>
                  <OcorrenciaVeiculos ocorrencia={ocorrencia} />
                </td>
              </CustomRoll>
            ))}
          </Table.Body>
        </Table>
      </Scroll>
      {selectedOcorrencia && (
        <OcorrenciaModal ocorrencia={selectedOcorrencia} />
      )}
    </Container>
  );
}

const Container = styled.div`
  border-radius: 5px;
  overflow: hidden;

  box-shadow: var(--shadow-1);
  background-color: white;

  color: var(--text-dark);
`;

const Scroll = styled.div`
  height: 78vh;
  overflow: auto;
`;

const CustomRoll = styled.tr`
  cursor: pointer;

  td:nth-child(1) {
    border-left: 5px solid ${({ risk }) => getColorByRisk(risk)};
  }

  td:nth-child(2) {
    font-weight: 700;
  }

  &:hover {
    background-color: var(--secondary) !important;
    color: white;
  }
`;
