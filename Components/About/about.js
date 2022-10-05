/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  AboutPageContainer,
  AboutPara,
  AboutMe,
  AboutContent,
  AboutImg,
} from "./aboutComponents";
import { ShowMore } from "../Project/Task/TaskComponents";
import Link from "next/link";
import ScrollAnimation from "../ScollAnimation/ScrollAnimation";

function About(props) {
  let data = props.data;
  const ScrollElements = ["AboutMe", "AboutImg", "AboutPara", "Resume"];
  ScrollAnimation(ScrollElements);
  return (
    <section id="About">
      <AboutPageContainer>
        <AboutMe id="AboutMe">About Me</AboutMe>
        <AboutContent>
          <AboutImg id="AboutImg" src="/ProfileImg.png" alt="img" />
          <AboutPara id="AboutPara">{JSON.parse(data).AboutPara}</AboutPara>
        </AboutContent>
        <Link href="/resume-min.png">
          <ShowMore id="Resume" color="#D9F8C4">
            Resume
          </ShowMore>
        </Link>
      </AboutPageContainer>
    </section>
  );
}

export default About;
