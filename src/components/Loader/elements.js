import styled, { keyframes } from "styled-components";

const load = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export const Container = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  text-align: center;
`;

const Base = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 10px;
  margin: 0 auto;
  position: relative;
  top: -2em;
  transform: translateZ(0);
  animation-delay: -0.16s;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation-fill-mode: both;
  animation: ${load} 1.8s infinite ease-in-out;
  &:before,
  &:after {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    animation-fill-mode: both;
    animation: ${load} 1.8s infinite ease-in-out;
    content: "";
    position: absolute;
    top: 0;
  }
`;

Container.Loader = styled(Base)`
  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }
`;

Container.Text = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 15px;
  font-size: 12px;
  font-weight: 600;
`;
