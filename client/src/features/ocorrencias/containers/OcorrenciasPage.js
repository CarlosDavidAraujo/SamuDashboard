import styled from "styled-components";
import { useState } from "react";

import { OcorrenciaRiscoChart } from "../components/OcorrenciaRiscoChart";
import { OcorrenciaEstatisticas } from "../components/OcorrenciaEstatisticas";
import { ButtonGroup } from "../../../shared/components/buttons/ButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

import { useSocket } from "../../../shared/hooks/useSocket";
import { getRiskCount } from "../utils/getRiskCount";
import { useOcorrenciaData } from "../hooks/useOcorrenciaData";
import useToggle from "../../../shared/hooks/useToogle";
import { OcorrenciaGrid } from "../components/OcorrenciaGrid";
import { ModalProvider } from "../../../contexts/ModalContext";
import { Box, Paper } from "@mui/material";
import { ScrollableTable } from "../../../shared/components/tables/ScrollableTable";

export function OcorrenciasPage() {
  const [tableLayout, toggle] = useToggle(true);
  const [ocorrencias, ocorrenciasByRisk] = useOcorrenciaData();
  const estatisticas = useSocket("ocorrencia:estatisticas");
  const riskCount = getRiskCount(ocorrencias);
  const [filter, setFilter] = useState(null);
  const filters = [
    {
      label: `Total (${ocorrencias.length})`,
      value: ocorrencias,
    },
    {
      label: `Risco 1 (${ocorrenciasByRisk.risco1.length})`,
      value: ocorrenciasByRisk.risco1,
    },
    {
      label: `Risco 2 (${ocorrenciasByRisk.risco2.length})`,
      value: ocorrenciasByRisk.risco2,
    },
    {
      label: `Risco 3 (${ocorrenciasByRisk.risco3.length})`,
      value: ocorrenciasByRisk.risco3,
    },
    {
      label: `Risco 4 (${ocorrenciasByRisk.risco4.length})`,
      value: ocorrenciasByRisk.risco4,
    },
    {
      label: `Sem classificação (${ocorrenciasByRisk.risco90.length})`,
      value: ocorrenciasByRisk.risco90,
    },
  ];

  const handleFilterChange = (e) => {
    const { value } = e.target;
    const selectedFilter = filters.find(filter => filter.label === value);
    console.log(selectedFilter);
    setFilter(selectedFilter);
  };

  const columns = [
    {
      label: "#",
      dataKey: "#",
    },
    {
      width: "40%",
      label: "Motivo",
      dataKey: "motivo",
      emphasis: true,
    },
    {
      width: "20%",
      label: "Médico regulador",
      dataKey: "regulador",
    },
    {
      width: "20%",
      label: "Bairro",
      dataKey: "bairro",
    },
    {
      width: "20%",
      label: "Veículos",
      dataKey: "veiculos",
    },
  ];

  const data = [
    {
      "#": 1,
      motivo: "Atropelamento AtropelamentoAtropelamentoAtropelamento",
      regulador: "Joao Paulo",
      bairro: "Parquelandia",
      veiculos: "USB 02",
    },
    {
      "#": 1,
      motivo: "Atropelamento AtropelamentoAtropelamentoAtropelamento",
      regulador: "Joao Paulo",
      bairro: "Parquelandia",
      veiculos: "USB 02",
    },
  ];

  return (
    <ModalProvider>
      <Container>
        <Box display="infinite-flex" position="sticky" top={88} zIndex={1}>
          <Paper>
            <ButtonGroup
              buttons={filters.map(filter => filter.label)}
              onChange={(event) => handleFilterChange(event)}
            />
          </Paper>
          {tableLayout ? (
            <ViewModuleIcon onClick={toggle} />
          ) : (
            <ViewListIcon onClick={toggle} />
          )}
        </Box>

        <Content>
          <OcorrenciasWrapper>
            {tableLayout ? (
              <ScrollableTable columns={columns} data={data} />
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

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  height: calc(100vh - 184.5px);
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
