//bibliotecas
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Popover, Typography, styled } from "@mui/material";

//componentes
import { StatusBeacon } from "../../../shared/components/icons/StatusBeacon";

// hooks e utils
import { formatDate } from "../../../shared/utils/formatDate";
import { getColorByVehicleStatus } from "../utils/getColorByVehicleStatus";


export function OcorrenciaVeiculo({ veiculo }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [id] = useState(uuidv4()); //gera um id unicno para cada instancia deste componente

  function handlePopoverOpen(e) {
    setAnchorEl(e.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  const eventosDoVeiculo = [
    { nome: "Envio de equipe", horario: veiculo.EnvioEquipeDT },
    { nome: "Saída da base", horario: veiculo.SaidaBaseDT },
    { nome: "Chegada ao local", horario: veiculo.ChegadaLocalDT },
    { nome: "Saída do local", horario: veiculo.SaidaLocalDT },
    { nome: "Chegada ao destino", horario: veiculo.ChegadaDestinoDT },
    { nome: "Retorno do destino", horario: veiculo.RetornoDestinoDT },
    { nome: "Chegada à base", horario: veiculo.ChegadaBaseDT },
  ];

  return (
    <>
      <StyledButton
        aria-owns={open ? id : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        variant="outlined"
        color="secondary"
      >
        <StatusBeacon color={getColorByVehicleStatus(veiculo)}/>
        {veiculo.nome}
      </StyledButton>
      <Popover
        id={id}
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <PopoverContent>
          {eventosDoVeiculo.map((evento, index) => (
            <Field key={index}>
              <Typography variant="body2">{evento.nome}:</Typography>
              <Typography variant="body2" fontWeight="bold">
                {formatDate(evento.horario)?.hour}
              </Typography>
            </Field>
          ))}
        </PopoverContent>
      </Popover>
    </>
  );
}

//------------------------ESTILOS--------------------------//

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(1)}
`;

const PopoverContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
`;

const Field = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

