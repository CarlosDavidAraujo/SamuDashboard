import { useState } from "react";
import styled from "styled-components";

export function ButtonGroup({
  buttonsConfig = [
    { label: "botao 1", onClick: () => {} },
    { label: "botao 2", onClick: () => {} },
    { label: "botao 3", onClick: () => {} },
  ],
}) {
  const [activeButton, setActiveButton] = useState(0);

  function handleButtonClick(button, index) {
    setActiveButton(index);
    button.onClick();
  }

  return (
    <Container>
      {buttonsConfig.map((button, index) => (
        <Button
          key={index}
          onClick={() => handleButtonClick(button, index)}
          active={activeButton === index}
        >
          {button.label}
        </Button>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  > button:nth-child(1) {
    border-left: 1px solid var(--secondary);
    border-radius: 3px 0 0 3px;
  }

  > button:nth-last-child(1) {
    border-radius: 0 3px 3px 0;
  }
`;

const Button = styled.button`
  padding: 10px 10px;
  border: 1px solid var(--secondary);
  border-left: none;
  cursor: pointer;

  font-family: inherit;
  font-weight: 600;

  ${({ active }) =>
    active
      ? `
      background-color: var(--secondary);
      color: white;
    `
      : `
      background-color: white;
      color: var(--secondary);
    `};
`;
