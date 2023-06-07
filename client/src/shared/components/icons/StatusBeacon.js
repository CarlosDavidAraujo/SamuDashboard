import styled from "styled-components";

export const StatusBeacon = styled.div`
  width: 10px;
  height: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "gray")};
  background-image: ${({ gradient }) => gradient && `radial-gradient(${gradient})`};
`;
