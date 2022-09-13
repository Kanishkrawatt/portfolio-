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
  Type,
  Anchor,
  ShowMore,
} from "./TaskComponents";

function Task(props) {
  const [item, setItem] = React.useState(3);
  let Data = JSON.parse(props.data);
  
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
  return (
    <>
    <TaskContainer>
      {Data.slice(0,item).map((content, index) => (
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
              <Button colortheme={ColorThemeArr[index%ColorThemeArr.length]} left><Anchor href="https://github.com/Kanishkrawatt"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></Anchor >
</Button>
              <Button colortheme={ColorThemeArr[index%ColorThemeArr.length]}>More..</Button>
            </Buttondiv>
          </Maindiv>
        </TasksDiv>
      ))}
      </TaskContainer>
      <ShowMore color="#FFEEAF" onClick={()=>Data.length==item?setItem(3):setItem(Data.length)}>{Data.length==item?"Show Less":"Show More"}</ShowMore>
      </>
  );
}

export default Task;
