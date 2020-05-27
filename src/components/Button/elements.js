import styled, { css } from "styled-components";

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.grayLighter};

  ${({ expanded }) =>
    expanded &&
    css`
      width: 100%;
    `}
  ${({ accent }) =>
    accent &&
    css`
      color: white;
    `};
  ${({ accent }) =>
    accent &&
    css`
      background-color: ${({ theme }) => theme.colors.accent};
    `};

  &:focus {
    outline: none;
  }
`;

Btn.Effect = styled.div`
  transition: 0.3s background-color ease;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ md }) =>
    md &&
    css`
      padding: 0.85rem 1rem;
    `};
  ${({ sm }) =>
    sm &&
    css`
      padding: 0.55rem 0.7rem;
    `};

  ${Btn}:hover & {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

Btn.Icon = styled.div`
  margin-right: 10px;
  display: inline-block;
`;

Btn.Text = styled.span`
  font-weight: bold;
  display: inline-block;
  ${({ md }) =>
    md &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.sm};
    `};
  ${({ sm }) =>
    sm &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xs};
    `};
`;
