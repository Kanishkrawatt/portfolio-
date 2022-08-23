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

function Path(props) {
  let [data,setdata] = useState(props.data)
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
          {JSON.parse(data).map((content, index) => {
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
          {path!=-1&&<PathHeader >{JSON.parse(data)[path].PathHeader}</PathHeader>}
          {path!=-1&&JSON.parse(data)[path].Path.map((pathdata,pindex)=>{
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



