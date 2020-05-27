import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  background-color: white;
  display: flex;
  align-items: center;
`;

Container.Input = styled.input.attrs({ type: "text" })`
  width: calc(100% - 60px);
  height: 100%;
  padding: 0 1.4rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  border: none;
  &:focus {
    outline: none;
  }
`;

Container.Opt = styled.div`
  user-select: none;
  cursor: pointer;
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grayLighter};
  }
`;

Container.Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray};
  user-select: none;
`;
