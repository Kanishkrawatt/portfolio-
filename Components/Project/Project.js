import React from "react";
import {
  ProjectDetails,
  ProjectDiv,
  ProjectDivTitle,
  ProjectDetailsNumber,
  ProjectDivTitleDiv,
  ProjectMain,
  ProjectTitle
} from "./ProjectContainerComponents";
import Task from "./Task/Task";

function Project() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let day = d.getDate();
  return (
    <section id="Project">
    <ProjectMain>
    <ProjectTitle>PROJECTS</ProjectTitle>
      <Task />
    </ProjectMain>
    </section>
  );
}

export default Project;
