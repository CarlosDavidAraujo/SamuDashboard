import { useLocation } from "react-router-dom";
import styled from "styled-components";

export function NavItem({ itemData, navExpanded }) {
  const currentPath = window.location.pathname;
  return (
    <Item href={itemData.pathname} active={currentPath === itemData.pathname}>
      <span>{itemData.icon}</span>
      {navExpanded && itemData.label}
    </Item>
  );
}

const Item = styled.a`
  width: 100%;
  padding: 10px 10px;
  border-radius: 5px;
  gap: 20px;
  display: flex;
  color: ${(props) => (props.active ? "black" : "#565656")};
  font-size: 18px;
  font-weight: ${props => props.active && 500};
  cursor: pointer;

  span {
    color: ${(props) => (props.active ? "var(--cor-principal)" : "#565656")};
  }

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-fundo);
    span {
      color: var(--cor-fundo);
    }
  }
`;
