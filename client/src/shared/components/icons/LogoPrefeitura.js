import styled from "styled-components";
import logo from "../../../assets/logo.png";

export function LogoPrefeitura() {
  return (
      <Img alt="logo prefeitura de fortaleza" src={logo} />
  );
}

const Img = styled.img`
    width: 100%;
`;