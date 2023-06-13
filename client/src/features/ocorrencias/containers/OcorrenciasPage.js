//bibliotecas
import { Box, Paper, styled } from "@mui/material";

//components
import { OcorrenciaRiscoChart } from "../components/OcorrenciaRiscoChart";
import { OcorrenciaEstatisticas } from "../components/OcorrenciaEstatisticas";
import { ButtonGroup } from "../../../shared/components/buttons/ButtonGroup";
import { ScrollableTable } from "../../../shared/components/tables/ScrollableTable";

//hooks, utils e contexts
import { useSocket } from "../../../shared/hooks/useSocket";
import { useFilterByRisk } from "../hooks/useFilterByRisk";
import { getTableConfig } from "../utils/getTableConfig";
import { getRiskCount } from "../utils/getRiskCount";
import { ModalProvider } from "../../../contexts/ModalContext";

export function OcorrenciasPage() {
  const { ocorrencias, filters, filterResult, handleFilterChange } =
    useFilterByRisk();
  const estatisticas = useSocket("ocorrencia:estatisticas");
  const riskCount = getRiskCount(ocorrencias);
  const { tableColumns, tableData } = getTableConfig(filterResult || ocorrencias);

  return (
    <ModalProvider>
      <div>
        <Box display="flex" position="sticky" top={88} zIndex={1}>
          <Paper>
            <ButtonGroup
              buttons={Object.keys(filters)}
              onChange={(event) => handleFilterChange(event)}
            />
          </Paper>
        </Box>
        <Content>
          <div style={{ flex: 4 }}>
            <ScrollableTable
              columns={tableColumns}
              data={tableData}
              showRiskBorder={true}
            />
          </div>
          <EstatisticasWrapper>
            <OcorrenciaEstatisticas estatisticas={estatisticas} />
            <OcorrenciaRiscoChart riskCount={riskCount} />
          </EstatisticasWrapper>
        </Content>
      </div>
    </ModalProvider>
  );
}

//-----------------ESTILOS-------------------//

const Content = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  height: calc(100vh - 184.5px);
  gap: 20px;
`;

const EstatisticasWrapper = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
