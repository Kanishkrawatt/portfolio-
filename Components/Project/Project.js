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
    <section id="project">
    <ProjectMain>
    <ProjectTitle>PROJECTS</ProjectTitle>
    <ProjectDiv>
      <ProjectDivTitleDiv>
        <ProjectDivTitle>Projects</ProjectDivTitle>
        <ProjectDivTitle right>{`${month}, ${day}`}</ProjectDivTitle>
      </ProjectDivTitleDiv>
      <ProjectDetails >
        <ProjectDetailsNumber>24</ProjectDetailsNumber>InProgress
      </ProjectDetails>
      <ProjectDetails>
        <ProjectDetailsNumber>24</ProjectDetailsNumber>Upcoming{" "}
      </ProjectDetails>
      <ProjectDetails>
        <ProjectDetailsNumber>24</ProjectDetailsNumber>Total Projects
      </ProjectDetails>
      <Task />
    </ProjectDiv>
    </ProjectMain>
    </section>
  );
}

export default Project;
