//bibliotecas
import { Paper, Typography, styled } from "@mui/material";

export function OcorrenciaEstatisticas({ estatisticas }) {
  return (
    <Container>
      <Item>
        <Typography variant="body2">Total de ligações</Typography>
        <Typography variant="h5">
          {estatisticas && estatisticas.totalOcorrencias}
        </Typography>
      </Item>
      <Item>
        <Typography variant="body2">Tempo resposta</Typography>
        <Typography variant="h5">
          {estatisticas && estatisticas.tempoRespostaMedio} min
        </Typography>
      </Item>
      <Item>
        <Typography variant="body2">Tempo QTY-QUS</Typography>
        <Typography variant="h5">
          {estatisticas && estatisticas.tempoRespostaQTYQUS} min
        </Typography>
      </Item>
      <Item>
        <Typography variant="body2">Tempo QUS-QUY</Typography>
        <Typography variant="h5">
          {estatisticas && estatisticas.tempoRespostaQUSQUY} min
        </Typography>
      </Item>
      <Item>
        <Typography variant="body2">Tempo QUY-QUU</Typography>
        <Typography variant="h5">
          {estatisticas && estatisticas.tempoRespostaQUYQUU} min
        </Typography>
      </Item>
    </Container>
  );
}

//------------------ESTILOS----------------------//

const Container = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-rows: 70;
  gap: ${(props) => props.theme.spacing(1)};
`;

const Item = styled(Paper)`
  padding: ${(props) => props.theme.spacing(1, 2)};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .MuiTypography-body2 {
    font-weight: 700;
  }

  .MuiTypography-h5 {
    font-weight: 700;
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;
