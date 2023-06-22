/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Image from "next/image";
import ScrollAnimation from "../../ScollAnimation/ScrollAnimation";
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
  ButtonShowMore,
  Tools,
  ToolsName,
} from "./TaskComponents";
import { LangImg } from "../../Skills/skillsComponents";

function Task({ data }) {
  const [item, setItem] = React.useState(4);
  const ScrollElements = [];
  data.slice(0, item).forEach((elem, index) => {
    ScrollElements.push(`Task${index}`);
  });
  ScrollAnimation(ScrollElements);

  const ColorThemeArr = [{ main: "#ffe4b2", gradient: "#9C9EFE" }];
  return (
    <>
      <TaskContainer>
        {data.slice(0, item).map((content, index) => (
          <TasksDiv
            id={`Task${index}`}
            key={index}
            colortheme={ColorThemeArr[index % ColorThemeArr.length]}
          >
            <Maindiv colortheme={ColorThemeArr[index % ColorThemeArr.length]}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70%",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TaskHeading style={{ textTransform: "capitalize" }}>
                    {content.TaskHeading}
                  </TaskHeading>
                  <Type>{content.Type}</Type>
                </div>
              </div>

              <Buttondiv>
                <Button
                  colortheme={ColorThemeArr[index % ColorThemeArr.length]}
                  left
                >
                  <Anchor href={content.Github} aria-label="GithubURL">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </Anchor>
                </Button>
                <Button
                  colortheme={ColorThemeArr[index % ColorThemeArr.length]}
                >
                  <Anchor
                    aria-label="MoreURL"
                    style={{ textDecoration: "none", color: "black" }}
                    href={content.More}
                  >
                    View..
                  </Anchor>
                </Button>
              </Buttondiv>
            </Maindiv>
          </TasksDiv>
        ))}
        {data.length > 2 && (
          <ButtonShowMore
            color={ColorThemeArr[0].main}
            onClick={() => {
              setItem(item == 4 ? data.length : 4);
            }}
          >
            {data.length == item ? "Show Less" : "Show More"}
          </ButtonShowMore>
        )}
      </TaskContainer>
    </>
  );
}

export default Task;
