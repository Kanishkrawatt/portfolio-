import {
  SkillsPage,
  Title,
  SkillsContainer,
  Lang,
  LangImg,
} from "./skillsComponents";
import Image from "next/image";
import ScrollAnimation from "../ScollAnimation/ScrollAnimation";
import { flexCenter } from "../../styles/flexCenter";
import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
export const FlexCenter = styled(flexCenter)`
  gap: 4rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const ShowMore = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 10vh;
  min-width: 15vw;
  margin: 4rem 0 13vh 0;
  width: 32vw;
  font-family: "Rum Raisin", sans-serif;
  border-radius: 2rem;
  transition: 1s all ease;
  background-color: #fad9e6;
  @media (max-width: 480px) {
    width: 70vw;
    min-width: 30vw;
    font-size: 1.5rem;
  }

  &::selection {
    background-color: transparent;
  }
`;
import { useMediaQuery } from "../Hooks/useMediaQuery";
const Skills = (props) => {
  let [item, setItem] = useState(3);
  const isMobile = useMediaQuery("(max-width: 480px)");
  useEffect(() => {
    if (isMobile) {
      setItem(2);
    } else {
      setItem(3);
    }
  }, [isMobile]);

  // let data = props.data;
  let data = [
    { name: "Next Js", icon: "Nextjs.svg" },
    { name: "Mongo Db", icon: "Mongodb.png" },
    { name: "FireBase", icon: "Firebase.svg" },
    { name: "JavaScript", icon: "Javascript.svg" },
    { name: "Node Js", icon: "Nodejs.svg" },
    { name: "HTML", icon: "HTML5.svg" },
    { name: "React", icon: "React.svg" },
    { name: "TypeScript", icon: "Typescript.svg" },
    { name: "CSS   ", icon: "CSS3.svg" },
    { name: "Express Js", icon: "Expressjs.svg" },
    { name: "Styled-Component", icon: "Styledcomponent.png" },
    { name: "GIT", icon: "Git.svg" },
  ];
  let n = data.length;
  let data1 = data.splice(0, Math.ceil(n / 2));
  let data2 = data.splice(0, Math.ceil(n / 2));
  const ScrollElements = [
    "SkillsTitle",
    "Skillcont1",
    "Skillcont2",
    "Skillcont3",
  ];
  ScrollAnimation(ScrollElements);
  return (
    <section id="Skills">
      <SkillsPage>
        <Title id="SkillsTitle">Skills</Title>
        <FlexCenter style={{ height: "auto" }}>
          <SkillsContainer id="Skillcont1">
            {data1.slice(0, item).map((item, index) => {
              return (
                <Lang key={index}>
                  <LangImg>
                    <Image src={`/Skills/${item.icon}`} alt="hey" fill></Image>
                  </LangImg>
                  {item.name}
                </Lang>
              );
            })}
          </SkillsContainer>
          <SkillsContainer id="Skillcont2">
            {data2.slice(0, item).map((item, index) => {
              return (
                <Lang key={index}>
                  <LangImg>
                    <Image
                      src={`/Skills/${item.icon}`}
                      alt="hey"
                      fill
                      priority
                    ></Image>
                  </LangImg>
                  {item.name}
                </Lang>
              );
            })}
          </SkillsContainer>
        </FlexCenter>
        <ShowMore
          id="Skillcont3"
          style={{}}
          onClick={() => {
            n / 2 == item ? setItem(isMobile ? 2 : 3) : setItem(n / 2);
          }}
        >
          {" "}
          SHOW {item == 3 ? "MORE" : "LESS"}
        </ShowMore>
      </SkillsPage>
    </section>
  );
};

export default Skills;
