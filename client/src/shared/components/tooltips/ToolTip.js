import styled from "styled-components";

export function ToolTip({ children, isVisible }) {
  if (!isVisible) {
    return null;
  }
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: max-content;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  z-index: 1000;
`;

const Content = styled.div`
  position: relative;
  top: 10px;
  padding: 10px;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-1);
  background-color: var(--secondary);

  &::before {
    content: "";
    position: absolute;
    bottom: 100%; /* Posiciona o triângulo acima do balão */
    left: 50%;
    transform: translateX(-50%); /* Centraliza horizontalmente */
    border-style: solid;
    border-width: 8px;
    border-color: transparent transparent var(--secondary) transparent;
  }
`;
