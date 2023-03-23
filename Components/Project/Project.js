/* eslint-disable react-hooks/exhaustive-deps */
import useScrollPosition from "../Hooks/useScreen";
import React, { useEffect, useState } from "react";
import getPosition from "../Hooks/getPosition";
import {
  ProjectDetails,
  ProjectDiv,
  ProjectDivTitle,
  ProjectDetailsNumber,
  ProjectDivTitleDiv,
  ProjectMain,
  ProjectTitle,
} from "./ProjectContainerComponents";
import Task from "./Task/Task";
import ScrollAnimation from "../ScollAnimation/ScrollAnimation";

function Project({ data }) {
  const ScrollElements = ["ProjectTit"];
  ScrollAnimation(ScrollElements);
  return (
    <section id="Project">
      <ProjectMain>
        <ProjectTitle id="ProjectTit">PROJECTS</ProjectTitle>
        <Task data={data} />
      </ProjectMain>
    </section>
  );
}

export default Project;
