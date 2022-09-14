/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import {
  AboutPageContainer,
  AboutPara,
  AboutMe,
  AboutContent,
  AboutImg,
} from "./aboutComponents";
import { ShowMore } from "../Project/Task/TaskComponents";
import Link from "next/link";
function About(props) {
  let data = props.data;
  const [show, setShow] = useState(false);

  const handleShow = () => {
    const about = document.getElementById("About").offsetTop;
    if (window.scrollY > about - 600) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleShow);
  }
  return (
    <section id="About">
      <AboutPageContainer>
        <AboutMe show={show}>About Me</AboutMe>

        <AboutContent>
          <AboutImg show={show} src="/ProfileImg.png" alt="img" />
          <AboutPara show={show}>{JSON.parse(data).AboutPara}</AboutPara>
        </AboutContent>
        <Link href="/resume.pdf">
          <ShowMore color="#D9F8C4">Resume</ShowMore>
        </Link>
      </AboutPageContainer>
    </section>
  );
}

export default About;
