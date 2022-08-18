import React, { useState } from "react";

import {
  MyPathsContainer,
  PathHeader,
  ChosePath,
  PathHeaderContainer,
  Timeline,
  Timeline_Line,
  Timeline_container,
} from "./pathcomponent";

function Path() {
  let data = [
    { PathHeader: "Web Developement", Path: [{"Heading":"HTML","About":"yo","side":"1"},{"Heading":"CSS","About":"yo","side":"2"},{"Heading":"JS","About":"yo","side":"1"}] },
    { PathHeader: "Programming", Path: [{"Heading":"Python","About":"yo","side":"1"},{"Heading":"C","About":"yo","side":"2"},{"Heading":"C++","About":"yo","side":"1"},{"Heading":"Java","About":"yo","side":"2"},{"Heading":"JavaScript","About":"yo","side":"1"}] },
  { PathHeader: "Machine Learning", Path: [{"Heading":"model1","About":"yo","side":"1"},{"Heading":"Model2","About":"yo","side":"2"},{"Heading":"model3","About":"yo","side":"1"}] },
  ];
  let [side,setside] = useState(true);
  return (
    <section id="Path">
      <MyPathsContainer>
        <ChosePath>ChosePath</ChosePath>
        <PathHeaderContainer>
          {data.map((content, index) => {
            return (
              <Timeline key={index}>
                <PathHeader>{content.PathHeader}</PathHeader>
                {content.Path.map((pathcontent, pindex) => {
                  return (
                    < >

                      <Timeline_container pos={pindex} right={pathcontent.side} >{pathcontent.Heading}</Timeline_container>
                      <Timeline_Line  />
                    </>
                  );
                })}
              </Timeline>
            );
          })}
        </PathHeaderContainer>
      </MyPathsContainer>
    </section>
  );
}

export default Path;
