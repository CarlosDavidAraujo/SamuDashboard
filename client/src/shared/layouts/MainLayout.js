import styled from "styled-components";
import { Navbar } from "../components/navbar/Navbar";
import { LogoPrefeitura } from "../components/icons/LogoPrefeitura";

export function MainLayout({ children }) {
  return (
    <Container>
      <Navbar />
      <HeaderBar>
        <LogoWrapper>
          <LogoPrefeitura />
        </LogoWrapper>
      </HeaderBar>
      <PageContent>{children}</PageContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const HeaderBar = styled.div`
  width: 100vw;
  height: var(--headerbar-height);
  padding: 0 20px 0 100px;
  top: 0;
  position: fixed;
  z-index: 700;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--primary);
`;

const LogoWrapper = styled.div`
  width: 120px;
`;

const PageContent = styled.div`
  width: 100%;
  margin-top: 50px;
`;
