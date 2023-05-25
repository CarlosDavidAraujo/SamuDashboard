import styled from "styled-components";
import { Veiculo } from "./OcorrenciaVeiculo";

export function OcorrenciaCard({ ocorrencia }) {
  const veiculos = JSON.parse(ocorrencia.Veiculos);

  return (
    <Card>
      <OcorrenciaID>{ocorrencia.OcorrenciaID}</OcorrenciaID>
      <h3 style={{ textTransform: "uppercase" }}>{ocorrencia.MotivoDS}</h3>
      <CardBody>
        <CardText>
          <CardTextCampo>MÉDICO REGULADOR: </CardTextCampo>
          <CardTextValor>{ocorrencia.OperadorNM}</CardTextValor>
        </CardText>
        <CardText>
          <CardTextCampo>BAIRRO: </CardTextCampo>{" "}
          <CardTextValor> {ocorrencia.Bairro}</CardTextValor>
        </CardText>
        {veiculos && (
          <Veiculos>
            {veiculos.map((veiculo, key) => (
              <Veiculo status={veiculo.Status} key={key}>
                {veiculo.VeiculoDS}
              </Veiculo>
            ))}
          </Veiculos>
        )}
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  background-color: var(--cor-secundaria);
  box-shadow: var(--card-shadow);
`;

const OcorrenciaID = styled.h4`
  width: max-content;
  padding: 0 5px;
  border-radius: 5px;
  background-color: var(--cor-destaque);
  color: white;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const CardText = styled.h4`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 5px;
`;

const CardTextCampo = styled.h5`
  font-weight: 600;
`;

const CardTextValor = styled.h5`
  font-weight: 400;
`;

const Veiculos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 5px;
`;
