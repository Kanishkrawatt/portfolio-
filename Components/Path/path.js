import React from 'react'

import { MyPathsContainer ,
    PathHeader,
    ChosePath,
    PathHeaderContainer ,
    Timeline,
    Timeline_Line,
    Timeline_container} from './pathcomponent'

function Path() {
  let data = [{"PathHeader":"Web Developement","Path":[]},
  {"PathHeader":"Programming","Path":[]},
  {"PathHeader":"Machine Learning","Path":[]}]
  return (
    <section id='Path'>
        <MyPathsContainer >
            <ChosePath>ChosePath</ChosePath>
            <PathHeaderContainer>
            {data.map((content,index)=>{
                return(
                    <Timeline key={index}>
                    <PathHeader>{content.PathHeader}</PathHeader>
                    <Timeline_Line />
                    <Timeline_container />
                    <Timeline_Line />
                    <Timeline_container right />
                    </Timeline>
            )
            })}
            
           
            </PathHeaderContainer>


        </MyPathsContainer>
    </section>
  )
}

export default Path
