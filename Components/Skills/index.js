import {
  SkillsPage,
  Title,
  SkillsContainer,
  Lang,
  LangImg,
} from "./skillsComponents";
import Image from "next/image";
import { flexCenter } from "../../styles/flexCenter";
import styled from "styled-components";
import { useState } from "react";
export const FlexCenter = styled(flexCenter)`
  gap: 2rem;
`;

const Skills = (props) => {
  let [item, setItem] = useState(3);
  // let data = props.data;
  let data = [
    { name: "Next Js", icon: "Nextjs" },
    { name: "Mongo Db", icon: "Mongodb" },
    { name: "FireBase", icon: "Firebase" },
    { name: "JavaScript", icon: "Javascript" },
    { name: "Node Js", icon: "Nodejs" },
    { name: "HTML", icon: "HTML5" },
    { name: "React", icon: "React" },
    { name: "TypeScript", icon: "Typescript" },
    { name: "CSS   ", icon: "CSS3" },
    { name: "Express Js", icon: "Expressjs" },
    { name: "Styled-Component", icon: "Styledcomponent" },
    { name: "GIT", icon: "Git" },

  ];
  let n = data.length;
  let data1 = data.splice(0, Math.ceil(n / 2));
  let data2 = data.splice(0, Math.ceil(n / 2));
  return (
    <section id="Home">
      <SkillsPage>
        <Title>Skills</Title>
        <FlexCenter style={{height:"auto"}}>
          <SkillsContainer>
            {data1.slice(0, item).map((item, index) => {
              return (
                <Lang key={index}>
                  <LangImg>
                    <Image
                      src={`/Skills/${item.icon}.png`}
                      alt="hey"
                      layout="fill"
                    ></Image>
                  </LangImg>
                  {item.name}
                </Lang>
              );
            })}
          </SkillsContainer>
          <SkillsContainer>
            {data2.slice(0, item).map((item, index) => {
              return (
                <Lang key={index}>
                  <LangImg>
                    <Image
                      src={`/Skills/${item.icon}.png`}
                      alt="hey"
                      layout="fill"
                    ></Image>
                  </LangImg>
                  {item.name}
                </Lang>
              );
            })}
          </SkillsContainer>
        </FlexCenter>
        <Lang
          style={{ marginTop: "2rem", width: "32vw",marginBottom:"13vh" }}
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
