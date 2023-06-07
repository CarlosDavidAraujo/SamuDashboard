import styled from "styled-components";
import useToggle from "../../hooks/useToogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navData } from "./NavData";
import { NavItem } from "./NavItem";

export function Navbar({ children }) {
  const [expanded, toogleSideBar] = useToggle(false);

  return (
    <Sidebar expanded={expanded} >
      <BarsIcon>
        <FontAwesomeIcon
          icon={faBars}
          onClick={toogleSideBar}
          size="xl"
          color="var(--primary)"
        />
      </BarsIcon>
      <SidebarItems>
        {navData.map((itemData, key) => (
          <NavItem itemData={itemData} navExpanded={expanded} key={key} />
        ))}
      </SidebarItems>
    </Sidebar>
  );
}

const Sidebar = styled.div`
  height: 100vh;
  top: 0;
  position: sticky;
  z-index: 1000;

  background-color: white;
  box-shadow: var(--shadow-1);
  
  transition: width 2s ease;
`;

const BarsIcon = styled.div`
  padding: 10px 20px;
`;

const SidebarItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
