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
export default function Home({Data}) {
  const AboutPageData = Data[0]
  const HomePageData = Data[1]
  const NevbarData = Data[2]["NevbarData"]
  const ProjectPageData = Data[3]["ProjectData"]
  const SkillsData = Data[4]["SkillsData"]
  const TimeLineData = Data[5]["TimeLineData"]
  const mainStyle = {
    scrollBehavior: "smooth",
  }
    
  return (
    <div style={mainStyle}>
      <Nevbar data={NevbarData} />
      <PageAnimation />
      <Homepage data={HomePageData} />
      <About data={AboutPageData} />
      <Skills data={SkillsData}/>
      <Project data={ProjectPageData} />
      <Path data={TimeLineData} />
      <Contact />
      <Foot />
    </div>
  );
}

export async function getStaticProps() {
  const Dataref = await db.collection("Data").get();
  let Data = Dataref.docs.map((entry) => entry.data());
  return {
    props: { Data }, // will be passed to the page component as props
    revalidate: 1,
  };
}
