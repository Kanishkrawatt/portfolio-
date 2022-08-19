import React, { useState } from "react";

import {
  MyPathsContainer,
  PathHeader,
  ChosePath,
  PathHeaderContainer,
  Timeline,
  Timeline_Line,
  Timeline_container,
  PathContainer,
} from "./pathcomponent";

function Path() {
  let data = [
    { PathHeader: "Web Developement", Path: [{"Heading":"HTML","About":"yo","side":"1"},{"Heading":"CSS","About":"yo","side":"2"},{"Heading":"JS","About":"yo","side":"1"}] },
    { PathHeader: "Programming", Path: [{"Heading":"Python","About":"yo","side":"1"},{"Heading":"C","About":"yo","side":"2"},{"Heading":"C++","About":"yo","side":"1"},{"Heading":"Java","About":"yo","side":"2"},{"Heading":"JavaScript","About":"yo","side":"1"}] },
  { PathHeader: "Machine Learning", Path: [{"Heading":"model1","About":"yo","side":"1"},{"Heading":"Model2","About":"yo","side":"2"},{"Heading":"model3","About":"yo","side":"1"}] },
  ];
  let [path,setpath] = useState(-1);
  const ShowPath = (index)=>{
    if(path!=index)
    {setpath(index);
    }
    else{
      setpath(-1);
    }
  }
  return (
    <section id="Path">
      <MyPathsContainer>
        <ChosePath>ChosePath</ChosePath>
        <PathHeaderContainer>
          {data.map((content, index) => {
            return (
                <Timeline key={index}>
                <PathHeader onClick={()=>ShowPath(index)}>{content.PathHeader}</PathHeader>
                </Timeline>
                
            );
          })}
          </PathHeaderContainer>
          <PathHeaderContainer style={{flexDirection:"column"}}>
          <Timeline style={{paddingTop:"5rem"}}>
          {path!=-1&&<ChosePath>TimeLine</ChosePath>}
          {path!=-1&&<PathHeader >{data[path].PathHeader}</PathHeader>}
          {path!=-1&&data[path].Path.map((pathdata,pindex)=>{
              return(
                <>
                <Timeline_Line />
                <Timeline_container pos={pindex} right={pathdata.side} >{pathdata.Heading}</Timeline_container>

                </>
              )
          })}
          </Timeline>
          </PathHeaderContainer>
      </MyPathsContainer>
    </section>
  );
}

export default Path;



