import styled from "styled-components";

import { flexCenter } from "../../styles/flexCenter";
import { AboutMe } from "../About/aboutComponents";
export const SkillsPage = styled(flexCenter)`
  justify-content: start;
  min-height: 120vh;
  height: auto;
  width: 100%;
  background-image: url("./PageImg/SkillsPage.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-direction: column;
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
  width: 15vw;
  font-family:  "Rum Raisin", sans-serif;
  min-width: 15vw;
  border-radius: 2rem;
  background-color: #fad9e6;
`;

export const SkillsContainer = styled(flexCenter)`
  gap: 4rem;
  flex-direction: column;
`;
export const LangImg = styled.div`
  position: relative;
  height: 3rem;
  width:3rem;
  border-radius: 10rem;
`