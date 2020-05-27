import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

Container.Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

Container.Alt = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }
`;

Container.Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2rem;
  z-index: 10;
`;

export default Container;
