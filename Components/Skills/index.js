import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";
import { AboutMe } from "../About/aboutComponents";
export const SkillsPage = styled(flexCenter)`
  align-items: flex-start;
  height: 120vh;
  width: 100%;
  background-image: url("./PageImg/SkillsPage.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Title = styled(AboutMe)`
font-size: 3rem;

`
const Skills = () => {
  return (
    <section id="Home">
      <SkillsPage>
        <Title>Skills</Title>
      </SkillsPage>
    </section>
  );
};

export default Skills;
