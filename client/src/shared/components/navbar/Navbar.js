import styled from "styled-components";
import useToggle from "../../hooks/useToogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navData } from "./NavData";
import { NavItem } from "./NavItem";

export function Navbar({ children }) {
  const [expanded, toogleSideBar] = useToggle(false);

  return (
    <>
      <Header>
        <FontAwesomeIcon
          icon={faBars}
          onClick={toogleSideBar}
          size="xl"
          color="var(--cor-fundo)"
        />
      </Header>
      <Sidebar expanded={expanded}>
        <SidebarIcon>
          <FontAwesomeIcon
            icon={faBars}
            onClick={toogleSideBar}
            size="xl"
            color="var(--cor-principal)"
          />
        </SidebarIcon>
        <SidebarItems>
          {navData.map((itemData, key) => (
            <NavItem itemData={itemData} navExpanded={expanded} key={key} />
          ))}
        </SidebarItems>
      </Sidebar>
      <PageContent expanded={expanded}>{children}</PageContent>
    </>
  );
}

const Header = styled.div`
  width: 100vw;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background-color: var(--cor-principal);
`;

const Sidebar = styled.div`
  height: 100vh;
  top: 0;
  position: fixed;
  background-color: var(--cor-fundo);
  background-color: white;
  box-shadow: var(--card-shadow);
  transition: ${(props) => (props.expanded ? 200 : 50)}ms;
`;

const SidebarIcon = styled.div`
  padding: 10px 20px;
`;

const SidebarItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const PageContent = styled.div`
  margin-left: ${(props) => (props.expanded ? 210 : 60)}px;
`;
