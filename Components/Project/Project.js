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

function Project(props) {
  let Data = props.data
  return (
    <section id="Project">
    <ProjectMain>
    <ProjectTitle>PROJECTS</ProjectTitle>
      <Task data = {Data}/>
    </ProjectMain>
    </section>
  );
}

export default Project;
