import styled from "styled-components";
import { animated } from "react-spring";

const Container = styled(animated.div)`
  position: fixed;
  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 65px;
  padding-bottom: 1rem;
  background-color: ${({ color }) => color};
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding-top: 100px;
  }
`;

Container.Close = styled.div`
  color: white;
  position: fixed;
  top:10px;
  left: calc(50% - 20px);
  width: 40px;
  height: 40px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`

export const Card = styled.div`
  background-color: white;
  width: 680px;
  margin: 0 auto;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

Card.Header = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 1.4rem;
  }
`;
Card.Header.Information = styled.div`
  padding: 0 1rem;
  width: calc(100% - 50px);
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: calc(100% - (127px + 50px));
  }
`;
Card.Header.Actions = styled.div`
  margin-left: auto;
  width: 127px;
  display: none;
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    display: block;
  }
`;

Card.Picture = styled.div`
  background-color: ${({ color }) => color};
  text-align: center;
`;
Card.Picture.Img = styled.img`
  width: 80%;
  margin: 0 auto;
  object-fit: cover;
  display: block;
`;

Card.Content = styled.section`
  padding: 1.8rem;
  & > main {
    display: flex;
    flex-direction: column;
    @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
      flex-direction: row;
    }
  }
`;
Card.Content.Information = styled.div`
  display: flex;
  justify-content: space-between;
`;

Card.Content.Description = styled.div`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding-right: 1.6rem;
  }
`;
Card.Content.Actions = styled.div`
  padding-top: 1rem;
  & > section {
    display: flex;
    justify-content: space-evenly;
    margin: 1.2rem 0;
    @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
      justify-content: space-between;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 335px;
    padding-top: 0;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.fontColors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.fontSizes.lg};
  margin: 0;
  text-transform: capitalize;
`;

Text.Title = styled.h2`
  margin: 4px 0;
  color: ${({ theme }) => theme.fontColors.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.fontSizes.md};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

Text.Information = styled.div`
  color: ${({ theme }) => theme.fontColors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.fontSizes.xs};
  font-weight: bold;
  & > svg {
    margin-right: 6px;
    font-size: 1rem;
  }
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.fontColors.accent};
  font-weight: bold;
`;

export const Separator = styled.hr`
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.grayLighter};
  margin: 1.4rem 0;
`;

export default Container;

export const MdHidden = styled.div`
  display: block;
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    display: none;
  }
`;
