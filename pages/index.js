import db from "../db";
import Foot from "../Components/Layout/foot/foot";
import About from "../Components/About/about";
import Path from "../Components/Timeline/path";
import Nevbar from "../Components/Layout/nevbar/nevbar";
import Homepage from "../Components/HomePage/Homepage";
import PageAnimation from "../Components/PageAnimation/page";
import Contact from "../Components/Contact";
import Project from "../Components/Project/Project";
import { useState } from "react";
import Skills from "../Components/Skills";
export default function Home(props) {
  const [data, setdata] = useState(JSON.parse(props.Data));
  let HomePageData = JSON.stringify(data.HomePageData);
  let AboutPageData = JSON.stringify(data.AboutPageData);
  let TimeLineData = JSON.stringify(data.TimeLineData);
  let NevbarData = JSON.stringify(data.NevbarData);
  let ProjectPageData = JSON.stringify(data.ProjectData);
  const mainStyle = {
    scrollBehavior: "smooth",
  }
    
  return (
    <div style={mainStyle}>
      <Nevbar data={NevbarData} />
      <PageAnimation />
      <Homepage data={HomePageData} />
      <About data={AboutPageData} />
      <Skills data={[]}/>
      <Project data={ProjectPageData} />
      <Path data={TimeLineData} />
      <Contact />
      <Foot />
    </div>
  );
}

export async function getStaticProps() {
  let data = await db.collection("data").get();
  let Alldata = data.docs.map((entry) => entry.data());
  const Data = Alldata[0].data;
  return {
    props: { Data }, // will be passed to the page component as props
    revalidate: 1,
  };
}
