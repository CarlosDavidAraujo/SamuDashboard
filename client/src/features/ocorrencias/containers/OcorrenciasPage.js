import styled from "styled-components";
import { useSocket } from "../../../shared/hooks/useSocket";
import { OcorrenciaRiscoChart } from "../components/OcorrenciaRiscoChart";
import { OcorrenciaEstatisticas } from "../components/OcorrenciaEstatisticas";
import { OcorrenciaLista } from "../components/OcorrenciaLista";

export function OcorrenciasPage() {
  const ocorrencias = useSocket("ocorrencia:consulta");
  const [estatisticas] = useSocket("ocorrencia:estatisticas");
  const riscos = useSocket("ocorrencia:risco");

  return (
    <Container>
      <MainContent>
        <Title>Ocorrências graves</Title>
        <OcorrenciaLista ocorrencias={ocorrencias} />
      </MainContent>
      <SecondaryContent>
      <Title>Atendimentos do dia</Title>
        <OcorrenciaEstatisticas estatisticas={estatisticas} />
        <OcorrenciaRiscoChart riscos={riscos} />
      </SecondaryContent>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  gap: 40px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

const Title = styled.h1`
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  overflow-y: scroll;
  padding: 0 5px 200px 0;
`;

const SecondaryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
