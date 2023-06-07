import React, { useState } from "react";
import styled from "styled-components";
import { useClickOutside } from "../../hooks/useClickOutside";

export const BalloonButton = ({ children, ballonChildren, color, ...props }) => {
  const [showBalloon, setShowBalloon] = useState(false);
  const balloonRef = useClickOutside(() => setShowBalloon(false));

  const handleClickButton = () => {
    setShowBalloon(true);
  };

  return (
    <Container>
      <Button onClick={handleClickButton} color={color} {...props}>
        {children}
      </Button>
      {showBalloon && <Balloon ref={balloonRef}>{ballonChildren}</Balloon>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: ${({ color }) => (color ? color : "white")};
  
  font-weight: 500;
  font-family: inherit;

  cursor: pointer;
`;

const Balloon = styled.div`
  width: max-content;
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  z-index: 1000;

  background-color: #f2f2f2;
  border: 1px solid #ccc;
`;
