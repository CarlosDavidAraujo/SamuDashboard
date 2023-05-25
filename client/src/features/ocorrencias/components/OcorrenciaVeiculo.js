import styled from "styled-components";

const statusColors = {
  'P': '#0099ff',
  'O': '#ffcc00',
  'L': '#32a81d',
}

export const Veiculo = styled.div`
  padding: 3px 5px;
  border-radius: 5px;
  background-color: ${(props) => statusColors[props.status]};
  font-size: 14px;
  font-weight: 500;
`;
