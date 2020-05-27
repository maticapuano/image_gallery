import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLighter};
`;

Container.Opt = styled.div`
user-select: none;
  cursor: pointer;
  margin-right: 10px;
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
