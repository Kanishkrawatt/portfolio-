import { useState } from "react";
import { MainInfo, Name, Shortinfo } from "./HomepageComponent";

import Typewriter from 'typewriter-effect';


function Homepage(props) {
  const [Data,setData]= useState(props.data)
  return (
    <section id="Home">
    <MainInfo>
      <Name>{JSON.parse(Data).Name}</Name>
      <Shortinfo>
      <Typewriter
  options={{
    strings: JSON.parse(Data).Shortinfo,
    autoStart: true,
    pauseFor: 0,
    loop: true,
  }}
/>
      </Shortinfo>
      
    </MainInfo>
    </section>
  );
}

export default Homepage;
