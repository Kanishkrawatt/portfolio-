import React from "react";
import { AboutPageContainer, AboutPara, AboutMe } from "./aboutComponents";
function About() {
  let data = {
    AboutPara:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free",
  };
  return (
    <section id="About">
    <AboutPageContainer>
      <AboutMe>About Me</AboutMe>
      <AboutPara>{data.AboutPara}</AboutPara>
    </AboutPageContainer>
    </section>
  );
}

export default About;
