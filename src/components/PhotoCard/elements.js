import styled, { css } from "styled-components";

const getRowSize = (size) => {
  switch (size) {
    case "sm":
      return "span 2";
    case "md":
      return "span 3";
    case "lg":
      return "span 4";
    default:
      return "span 3";
  }
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-row: ${({ size }) => getRowSize(size)};
`;

Container.Content = styled.div`
  height: 58px;
  display: flex;
  padding: 10px 0 0 0;
  width: 100%;
  justify-content: flex-start;
`;

Container.Text = styled.section`
  padding-left: 15px;
  width: calc(100% - 40px);
`;

Container.Title = styled.h2`
  color: ${({ theme }) => theme.fontColors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  margin-top: 4px;
`;

Container.Description = styled.p`
  color: ${({ theme }) => theme.fontColors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Picture = styled.section`
  height: calc(100% - 58px);
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  position: relative;
`;

Picture.Content = styled.section`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.7));
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  flex-direction: column-reverse;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.1s all ease;
  transform: translateY(0%);
  opacity: 1;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    transform: translateY(10%);
    opacity: 0;
  }

  ${Container}:hover & {
    transform: translateY(0%);
    opacity: 1;
  }
`;

Picture.RRSS = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 4px;
`;

Picture.RRSS.Icon = styled.div`
  padding: 8px;
  font-size: 20px;
  margin-left: ${({ download }) => (download ? "auto" : "0px")};
  ${({ instagram }) =>
    instagram &&
    css`
      color: #e4405f;
    `};
  ${({ twitter }) =>
    twitter &&
    css`
      color: #00acee;
    `};
`;

export default Container;
