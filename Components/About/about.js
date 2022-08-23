import React, { useState } from "react";
import { AboutPageContainer, AboutPara, AboutMe } from "./aboutComponents";
function About(props) {
  let [data,setdata] =useState(props.data)

  return (
    <section id="About">
    <AboutPageContainer>
      <AboutMe>About Me</AboutMe>
      <AboutPara>{JSON.parse(data).AboutPara}</AboutPara>
    </AboutPageContainer>
    </section>
  );
}

export default About;
