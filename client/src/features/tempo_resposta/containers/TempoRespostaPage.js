//bibliotecas
import { TextField, styled } from "@mui/material";

//componentes
import { TabelaVeiculos } from "../components/TabelaVeiculos";
import { TabelaUnidadesDestino } from "../components/TabelaUnidadesDestino";

//hooks, utils e contexts
import { useMonth } from "../../../shared/hooks/useMonth";

export function TempoRespostaPage() {
  const { month, handleMonthChange } = useMonth();

  return (
    <div>
      <Menu>
        <TextField
          variant="outlined"
          color="secondary"
          type="month"
          focused
          value={month}
          onChange={handleMonthChange}
        />
      </Menu>
      <Content>
        <TabelaVeiculos date={month} />
        <TabelaUnidadesDestino date={month} />
      </Content>
    </div>
  );
}

//------------------------ESTILOS--------------------//
const Menu = styled("div")`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

const Content = styled("div")`
  height: calc(100vh - 192px);
  display: flex;
  gap: ${(props) => props.theme.spacing(2)};
`;
