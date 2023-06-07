import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 10px;
  border: 2px solid var(--secondary);
  border-radius: var(--border-radius-sm);
  cursor: pointer;

  font-family: inherit;
  font-weight: 700;
  color: var(--secondary);

  &:hover {
    background-color: var(--secondary);
    color: white;
  }
`;