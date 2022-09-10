/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { AboutPageContainer, AboutPara, AboutMe,AboutContent ,AboutImg} from "./aboutComponents";
import {ShowMore} from "../Project/Task/TaskComponents";
function About(props) {
  let [data,setdata] =useState(props.data)

  return (
    <section id="About">
    <AboutPageContainer>
      <AboutMe>About Me</AboutMe>

      <AboutContent>
      <AboutImg src="/ProfileImg.png" alt="img" />
      <AboutPara>{JSON.parse(data).AboutPara}</AboutPara>
      </AboutContent>
      <ShowMore color="#D9F8C4">Resume</ShowMore>
    </AboutPageContainer>
    </section>
  );
}

export default About;
