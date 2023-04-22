import React, { useState } from "react";
import Link from "next/link";
import {
  MyPathsContainer,
  PathHeader,
  ChosePath,
  PathHeaderContainer,
  Timeline,
  Timeline_container,
  TimeLine_Heading,
  Timeline_container_project_container,
  Timeline_container_project,
  TimeLine_Data,
  Timeline_Time,
  Close,
} from "./pathcomponent";

import ScrollAnimation from "../ScollAnimation/ScrollAnimation";

function Path({ data }) {
  const [path, setpath] = useState(0);
  const TimeLineids = data[path].Path.map((pathdata, pindex) => {
    return `TimeLine-${pindex}`;
  });
  const ScrollElements = [
    ...TimeLineids,
    "TimeLineHeader",
    "TimeLinePathHeader",
    "TimeLineMorePathHeader",
    "TimeLineMoreTimeLines",
  ];

  ScrollAnimation(ScrollElements);

  const ShowPath = (index) => {
    if (path != index) {
      setpath(index);
    } else {
      setpath(-1);
    }
  };
  return (
    <section id="TimeLine">
      <MyPathsContainer>
        <PathHeaderContainer style={{ flexDirection: "column" }}>
          <section>
            <Timeline style={{ paddingTop: "5rem" }}>
              {path != -1 && (
                <ChosePath id="TimeLineHeader">TimeLine</ChosePath>
              )}
              {path != -1 && (
                <PathHeader id="TimeLinePathHeader">
                  {data[path].PathHeader}
                </PathHeader>
              )}
              {path != -1 &&
                data[path].Path.map((pathdata, pindex) => {
                  return (
                      <Timeline_container
                        key={pindex}
                        id={`TimeLine-${pindex}`}
                        imgUrl={`./${pathdata.year}m.png`}
                        right={pindex % 2 == 0 ? 1 : 2}
                      >
                        <TimeLine_Heading>{pathdata.Heading}</TimeLine_Heading>
                        <Timeline_Time>{pathdata.month}</Timeline_Time>

                        <TimeLine_Data>{pathdata.para}</TimeLine_Data>
                        <Timeline_container_project_container>
                          <Timeline_container_project>
                            Projects
                          </Timeline_container_project>
                          <Timeline_container_project>
                            More..
                          </Timeline_container_project>
                        </Timeline_container_project_container>
                      </Timeline_container>
                  );
                })}
            </Timeline>
          </section>
        </PathHeaderContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ChosePath style={{ marginTop: "3rem" }} id="TimeLineMoreTimeLines">
            More TimeLines
          </ChosePath>
          <PathHeaderContainer id="TimeLineMorePathHeader">
            {data.map((content, index) => {
              return (
                <Timeline id={`path${index}`} key={index}>
                  {path == -1 ? (
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      href="#Timeline"
                    >
                      <PathHeader onClick={() => ShowPath(index)}>
                        {content.PathHeader}
                      </PathHeader>
                    </Link>
                  ) : (
                    <PathHeader onClick={() => ShowPath(index)}>
                      {content.PathHeader}
                    </PathHeader>
                  )}
                </Timeline>
              );
            })}
          </PathHeaderContainer>
        </div>
      </MyPathsContainer>

      {/* {path != -1 && (
        <Link style={{ textDecoration:"none",color:"black" }} href="#Path">
          <Close
            onClick={() => {
              setpath(-1);
            }}
          >
            Back to Timeline
          </Close>
        </Link>
      )} */}
    </section>
  );
}

export default Path;
