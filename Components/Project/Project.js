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
import ScrollAnimation from "../ScollAnimation/ScrollAnimation";
import Task from "./Task/Task";

function Project({ data }) {
  data = [].concat(data).reverse();
  const ScrollElements = ["ProjectTit"];
  ScrollAnimation(ScrollElements);
  return (
    <section id="Project">
      <ProjectMain>
        <ProjectTitle id="ProjectTit">PROJECTS</ProjectTitle>
        <div style={{ padding: "2rem 10vw" }}>
          <Task data={data} />
        </div>
      </ProjectMain>
    </section>
  );
}

export default Project;
