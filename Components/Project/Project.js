import React ,{useState} from "react";

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
  const [show, setShow] = useState(false);
  const handleShow = () => {
    const project = document.getElementById("Project").offsetTop;
    if (window.scrollY > project - 600) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleShow);
  }
  return (
    <section id="Project">
    <ProjectMain>
    <ProjectTitle show={show}>PROJECTS</ProjectTitle>
      <Task data = {Data}/>
    </ProjectMain>
    </section>
  );
}

export default Project;
