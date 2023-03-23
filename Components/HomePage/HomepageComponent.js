import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";

export const MainInfo = styled(flexCenter)`
  background-color: #9ed2c6;
  background-image: url("/PageImg/Home.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  color: white;
  flex-direction: column;
  height: 100vh;
  &::selection {
    background-color: transparent;
  }
`;

export const Name = styled.div`
  font-family: "Rum Raisin", sans-serif;
  font-size: 6rem;
  transform: translateY(-10vh);
  &::selection {
    background-color: transparent;
  }
`;

export const Shortinfo = styled.div`
  font-family: "Megrim", cursive;
  font-size: 3rem;
  display: flex;
  flex-direction: row;
  height: auto;
  width: 23rem;
  padding: 0rem auto;
  transform: translateY(-10vh) translateX(3vw);
  color: #f7ecde;
  &::selection {
    background-color: transparent;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    width: 13rem;
  }
`;
