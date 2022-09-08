import React from "react";
import Image from "next/image";
import {
  TaskContainer,
  TaskHeading,
  TasksDiv,
  Date,
  DateDiv,
  Progress,
  ProgressBar,
  ProgressScore,
  Maindiv,
  Button,
  Buttondiv,
  Type
} from "./TaskComponents";

function Task() {
  let Data = [
    {
      EventDate: "December 10,2022",
      TaskHeading: "Overlow",
      Type: "Blog Website",
      ProgressScore: "90%",
    },
    {
      EventDate: "December 10,2022",
      TaskHeading: "Portfolio",
      Type: "Website",
      ProgressScore: "70%",
    },
    {
      EventDate: "December 10,2022",
      TaskHeading: "Work Push",
      Type: "Website",
      ProgressScore: "20%",
    },
    {
      EventDate: "December 10,2022",
      TaskHeading: "Portfolio",
      Type: "Website",
      ProgressScore: "70%",
    },
    {
      EventDate: "December 10,2022",
      TaskHeading: "Work Push",
      Type: "Website",
      ProgressScore: "20%",
    },
  ];
  const colortheme = {
    main: "#D2D79F",
    gradient: "#90B77D",
  };
  const ColorThemeArr = [
    { main: "#E1FFEE", gradient: "#A5F1E9" },
    { main: "#D2D79F", gradient: "#90B77D" },
    { main: "#AFB4FF", gradient: "#9C9EFE" },
    { main: "#FFE5B4", gradient: "#FFA500" },
    { main: "#FFC4DD", gradient: "#E4AEC5" },
    { main: "#FFF38C", gradient: "#D9CB50" },
    { main: "#E64848", gradient: "#C21010" },
    { main: "#FCF8E8", gradient: "#94B49F" },
  ];
  console.log(ColorThemeArr.length);
  return (
    <TaskContainer>
      {Data.map((content, index) => (
        <TasksDiv key={index} colortheme={ColorThemeArr[index%ColorThemeArr.length]}>
          <DateDiv>
            <Date>{content.EventDate}</Date>
            <Image
              style={{ cursor: "pointer" }}
              src={"/3dots.png"}
              alt=":"
              height="20"
              width="20"
            />
          </DateDiv>
          <Maindiv colortheme={ColorThemeArr[index%ColorThemeArr.length]}>
            <TaskHeading>{content.TaskHeading}</TaskHeading>
            <Type>{content.Type}</Type>
            <Progress>
              Progress
              <ProgressBar
                colortheme={ColorThemeArr[index%ColorThemeArr.length]}
                Score={content.ProgressScore}
              />
              <ProgressScore>{content.ProgressScore}</ProgressScore>
            </Progress>
            <Buttondiv>
              <Button colortheme={ColorThemeArr[index%ColorThemeArr.length]} left></Button>
              <Button colortheme={ColorThemeArr[index%ColorThemeArr.length]}>More..</Button>
            </Buttondiv>
          </Maindiv>
        </TasksDiv>
      ))}
    </TaskContainer>
  );
}

export default Task;
