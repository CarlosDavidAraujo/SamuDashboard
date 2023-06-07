import styled from "styled-components";
import { Modal } from "../../../shared/components/modals/Modal";
import { formatToPascalCaseWithSpace } from "../../../shared/utils/formatToPascalCase";
import { formatDate } from "../../../shared/utils/formatDate";
import { OcorrenciaVeiculos } from "./OcorrenciaVeiculos";

export function OcorrenciaModal({ ocorrencia }) {
  return (
    <Modal
      header={
        <ModalHeader>
          <h3>{`${ocorrencia?.id.slice(-4)} - ${ocorrencia.motivo}`}</h3>
          <div>
            <Field>
              Médigo regulador:
              <span>{ocorrencia.operador}</span>
            </Field>
            <Field>
              Bairro:
              <span>{formatToPascalCaseWithSpace(ocorrencia.bairro)}</span>
            </Field>
            <Field>
              Abertura:
              <span>{formatDate(ocorrencia.horario).date}</span>
            </Field>
          </div>
        
          <OcorrenciaVeiculos ocorrencia={ocorrencia} />
        </ModalHeader>
      }
    >
      <p>{ocorrencia.avaliacao}</p>
    </Modal>
  );
}

const ModalHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  > h3 {
    width: 100%;
    margin-bottom: 5px;
    color: var(--secondary);
  }

  > div:nth-child(2) {
    margin-right: 20px;
    padding-right: 20px;
    border-right: 2px solid lightgray;
  }

`;

const Field = styled.h4`
  font-weight: 500;

  span {
    font-weight: 700;
    margin-left: 5px;
  }
`;
