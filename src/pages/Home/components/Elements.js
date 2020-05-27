import styled from "styled-components";
import { animated } from "react-spring";

const Container = styled.main`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-auto-rows: 150px;
  padding: 1rem;
  padding-top: calc(70px + 1rem);
`;

export default Container;

export const NavContainer = styled.nav`
  height: 65px;
  background-color: white;
  position: fixed;
  z-index: 99;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLighter};
`;

export const Animated = styled(animated.div)`
  width: 100%;
  height: 65px;
  position: fixed;
`;