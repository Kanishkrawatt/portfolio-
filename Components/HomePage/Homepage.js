import { useState } from "react";
import { MainInfo, Name, Shortinfo } from "./HomepageComponent";

function Homepage(props) {
  const [Data,setData]= useState(props.data)
  return (
    <section id="Home">
    <MainInfo>
      <Name>{JSON.parse(Data).Name}</Name>
      <Shortinfo>{JSON.parse(Data).Shortinfo}</Shortinfo>
    </MainInfo>
    </section>
  );
}

export default Homepage;
