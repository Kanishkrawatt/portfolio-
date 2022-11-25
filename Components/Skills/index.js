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
import { useState, useEffect } from "react";
export const FlexCenter = styled(flexCenter)`
  gap: 4rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Skills = (props) => {
  let [item, setItem] = useState(3);
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
  const ScrollElements = ["SkillsTitle", "Skillcont1", "Skillcont2", "Skillcont3"];
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
                    <Image
                      src={`/Skills/${item.icon}`}
                      alt="hey"
                      layout="fill"
                    ></Image>
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
                      layout="fill"
                      priority
                    ></Image>
                  </LangImg>
                  {item.name}
                </Lang>
              );
            })}
          </SkillsContainer>
        </FlexCenter>
        <Lang id="Skillcont3"
          style={{
            marginTop: "2rem",
            width: "32vw",
            marginBottom: "13vh",
          }}
          onClick={() => {
            n / 2 == item ? setItem(3) : setItem(n / 2);
          }}
        >
          {" "}
          SHOW {item == 3 ? "MORE" : "LESS"}
        </Lang>
      </SkillsPage>
    </section>
  );
};

export default Skills;
