import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { Button } from "../buttons/Button";
import { useModalContext } from "../../../contexts/ModalContext";

export const Modal = ({ header, children }) => {
  const {isOpen, setIsOpen} = useModalContext();
  const springs = useSpring({
    from: { translateY: "100%" },
    to: { translateY: isOpen ? "0%" : "100%" },
    config: config.stiff,
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <ModalContent style={springs}>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Fechar</Button>
        </ModalFooter>
      </ModalContent>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled(animated.div)`
  position: relative;
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-sm);
  background-color: white;
  box-shadow: var(--shadow-1);
`;

const ModalHeader = styled.div`
  padding: 10px;
  display: flex;
`;

const ModalBody = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  box-shadow: inset 0px 4px 4px -4px rgba(0, 0, 0, 0.5),
    inset 0px -4px 4px -4px rgba(0, 0, 0, 0.5);
`;

const ModalFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;
