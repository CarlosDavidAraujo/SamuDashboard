import styled from "styled-components";

import { StatusBeacon } from "../../../shared/components/icons/StatusBeacon";

import { useVisibility } from "../../../shared/hooks/useVisibility";
import { formatDate } from "../../../shared/utils/formatDate";
import { getColorByVehicleStatus } from "../utils/getColorByVehicleStatus";
import { ToolTip } from "../../../shared/components/tooltips/ToolTip";


export function OcorrenciaVeiculo({ veiculo }) {
  const { isVisible, show, hidde } = useVisibility();

  return (
    <Container
      onMouseEnter={show}
      onMouseLeave={hidde}
    >
      <StatusBeacon
        gradient={`${getColorByVehicleStatus(veiculo.status)}, gray`}
      />
      {veiculo.nome}
      <ToolTip isVisible={isVisible}>
        <ToolTipContent>
          <Field>
            Envio de equipe:
            <span>{formatDate(veiculo.EnvioEquipeDT)?.hour}</span>
          </Field>
          <Field>
            Saída da base:
            <span>{formatDate(veiculo.SaidaBaseDT)?.hour}</span>
          </Field>
          <Field>
            Chegada ao local:
            <span>{formatDate(veiculo.ChegadaLocalDT)?.hour}</span>
          </Field>
          <Field>
            Saída do local:
            <span>{formatDate(veiculo.SaidaLocalDT)?.hour}</span>
          </Field>
          <Field>
            Chegada ao destino:
            <span>{formatDate(veiculo.ChegadaDestinoDT)?.hour}</span>
          </Field>
          <Field>
            Retorno do destino:
            <span>{formatDate(veiculo.RetornoDestinoDT)?.hour}</span>
          </Field>
          <Field>
            Chegada à base:
            <span>{formatDate(veiculo.ChegadaBaseDT)?.hour}</span>
          </Field>
        </ToolTipContent>
      </ToolTip>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 5px 10px;
  border-radius: var(--border-radius-sm); 

  background-color: lightgray;

  color: var(--text-dark);
`;

const ToolTipContent = styled.div`
  display: flex;
  flex-direction: column;
  gap:5px;
`;

const Field = styled.h4`
  display: flex;
  justify-content: space-between;
  color: var(--cor-fundo);
  font-weight: 400;
  font-size: var(--font-sm);
  span {
    font-weight: 700;
    margin-left: 5px;
  }
`;
