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
  width: 32rem;
  font-family: "Rum Raisin", sans-serif;
  border-radius: 2rem;
  transition: 1s all ease;
  background-color: #fad9e6;
  @media (max-width: 480px) {
    width: 70vw;
    min-width: 30vw;
    padding: 1.2rem 0;
    font-size: 1.5rem;
  }

  &::selection {
    background-color: transparent;
  }
`;
import { useMediaQuery } from "../Hooks/useMediaQuery";
const Skills = ({ data }) => {
  const [item, setItem] = useState(3);
  const isMobile = useMediaQuery("(max-width: 480px)");
  useEffect(() => {
    if (isMobile) {
      setItem(2);
    } else {
      setItem(3);
    }
  }, [isMobile]);
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
            {data &&
              data.slice(0, item).map((item, index) => {
                return (
                  <Lang key={index}>
                    <LangImg>
                      <Image
                        src={`/Skills/${item.icon}`}
                        alt="hey"
                        fill
                      ></Image>
                    </LangImg>
                    {item.name}
                  </Lang>
                );
              })}
          </SkillsContainer>
          <SkillsContainer id="Skillcont2">
            {data &&
              data
                .slice(
                  Math.floor(data.length / 2),
                  Math.floor(data.length / 2) + item
                )
                .map((item, index) => {
                  return (
                    <Lang key={index}>
                      <LangImg>
                        <Image
                          src={`/Skills/${item.icon}`}
                          alt="hey"
                          fill
                          sizes="
                          (max-width: 480px) 50vw,
                          (max-width: 800px) 30vw,
                          15vw"
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
            data.length / 2 == item
              ? setItem(isMobile ? 2 : 3)
              : setItem(data.length / 2);
          }}
        >
          {" "}
          SHOW {item == 3 || (isMobile && item == 2) ? "MORE" : "LESS"}
        </ShowMore>
      </SkillsPage>
    </section>
  );
};

export default Skills;
