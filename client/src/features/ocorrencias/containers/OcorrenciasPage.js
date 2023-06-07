import styled from "styled-components";
import { useState } from "react";

import { OcorrenciaRiscoChart } from "../components/OcorrenciaRiscoChart";
import { OcorrenciaEstatisticas } from "../components/OcorrenciaEstatisticas";
import { OcorrenciaTable } from "../components/OcorrenciaTable";
import { ButtonGroup } from "../../../shared/components/buttons/ButtonGroup";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

import { useSocket } from "../../../shared/hooks/useSocket";
import { getRiskCount } from "../utils/getRiskCount";
import { useOcorrenciaData } from "../hooks/useOcorrenciaData";
import { useButtonGroupConfig } from "../hooks/useButtonGroupConfig";
import useToggle from "../../../shared/hooks/useToogle";
import { OcorrenciaGrid } from "../components/OcorrenciaGrid";
import { ModalProvider } from "../../../contexts/ModalContext";

export function OcorrenciasPage() {
  const [tableLayout, toggle] = useToggle(true);
  const [ocorrencias, ocorrenciasByRisk] = useOcorrenciaData();
  const estatisticas = useSocket("ocorrencia:estatisticas");
  const riskCount = getRiskCount(ocorrencias);
  const [filter, setFilter] = useState(null);
  const buttonsConfig = useButtonGroupConfig(
    setFilter,
    ocorrencias,
    ocorrenciasByRisk
  );

  return (
    <ModalProvider>
      <Container>
        <Menus>
          <ButtonGroup buttonsConfig={buttonsConfig} />
          {tableLayout ? (
            <BsFillGrid3X3GapFill onClick={toggle} />
          ) : (
            <FaThList onClick={toggle} />
          )}
        </Menus>
        <Content>
          <OcorrenciasWrapper>
            {tableLayout ? (
              <OcorrenciaTable ocorrencias={filter || ocorrencias} />
            ) : (
              <OcorrenciaGrid ocorrencias={filter || ocorrencias} />
            )}
          </OcorrenciasWrapper>
          <EstatisticasWrapper>
            <OcorrenciaEstatisticas estatisticas={estatisticas} />
            <OcorrenciaRiscoChart riskCount={riskCount} />
          </EstatisticasWrapper>
        </Content>
      </Container>
    </ModalProvider>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const Menus = styled.div`
  position: fixed;
  z-index: 600;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
  svg {
    font-size: 25px;
    color: var(--secondary);
  }
`;

const Content = styled.div`
  margin-top: 77px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const OcorrenciasWrapper = styled.div`
  flex: 4;
`;

const EstatisticasWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
