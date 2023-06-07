import styled from "styled-components";
import { getColorByRisk } from "../utils/getColorByRisk";
import { formatToPascalCaseWithSpace } from "../../../shared/utils/formatToPascalCase";
import { OcorrenciaVeiculos } from "./OcorrenciaVeiculos";

export function OcorrenciaCard({ ocorrencia, onClick }) {
  const veiculos = JSON.parse(ocorrencia.veiculos);
  const ocorrenciaID = ocorrencia.id.slice(-4);
  const bairro = formatToPascalCaseWithSpace(ocorrencia.bairro);

  return (
    <Container risk={ocorrencia.risco} onClick={onClick}>
      <OcorrenciaID>{ocorrenciaID}</OcorrenciaID>
      <CardTitle>{ocorrencia.motivo}</CardTitle>
      <CardBody>
        <Field>
          Médico regulador:
          <span>{ocorrencia.operador}</span>
        </Field>
        <Field>
          Bairro:
          <span>{bairro}</span>
        </Field>
        <OcorrenciaVeiculos ocorrencia={ocorrencia}/>
      </CardBody>
    </Container>
  );
}

const Container = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  background: #ffffff;
  border-left: 5px solid ${({ risk }) => getColorByRisk(risk)};
  box-shadow: var(--shadow-1);

  font-family: inherit;
  color: var(--text-dark);
`;

const OcorrenciaID = styled.h4`
  align-self: flex-end;
`;

const CardTitle = styled.h3`
  text-transform: uppercase;
  text-align: start;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;
`;

const Field = styled.h4`
  font-weight: 500;
  font-size: var(--font-sm);
  span {
    font-weight: 700;
    margin-left: 5px;
  }
`;
