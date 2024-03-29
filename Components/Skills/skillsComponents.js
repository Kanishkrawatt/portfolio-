import styled from "styled-components";

import { flexCenter } from "../../styles/flexCenter";
import { AboutMe } from "../About/aboutComponents";
export const SkillsPage = styled(flexCenter)`
  justify-content: start;
  min-height: 120vh;
  height: auto;
  width: 100%;
  background-color: #e4aec5;
  background-image: url("./PageImg/SkillsPage.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  @media (max-width: 800px) {
    min-height: 140vh;
    padding-bottom: 40vh;
  }
`;
export const Title = styled(AboutMe)`
  font-size: 3rem;
  /* background-color:#fad9e6; */
  /* padding:1rem; */
  /* border-radius: 2rem; */
`;
export const Lang = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 10vh;
  width: "32vw";
  font-family: "Rum Raisin", sans-serif;
  min-width: 15rem;
  border-radius: 2rem;
  transition: 1s all ease;
  background-color: #fad9e6;
  &::selection {
    background-color: transparent;
  }
  @media (max-width: 800px) {
    width: 70vw;
    padding: 1.2rem 0;
  }
`;

export const SkillsContainer = styled(flexCenter)`
  gap: 4rem;
  flex-direction: column;
  transition: 1s all ease;
`;
export const LangImg = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
  border-radius: 10rem;
  transition: 1s all ease;
  &::selection {
    background-color: transparent;
  }
`;
