import db from "../db";
import Foot from "../Components/Layout/foot/foot";
import About from "../Components/About/about";
import Path from "../Components/Timeline/path";
import Nevbar from "../Components/Layout/nevbar/nevbar";
import Homepage from "../Components/HomePage/Homepage";
import PageAnimation from "../Components/PageAnimation/page";
import Contact from "../Components/Contact";
import Project from "../Components/Project/Project";
import Skills from "../Components/Skills";

import { collection, getDocs } from "firebase/firestore";

export default function Home({ Data }) {
  const mainStyle = {
    scrollBehavior: "smooth",
  };
  console.log("HELLO And Welcome To My Portfolio");

  return (
    <div style={mainStyle}>
      <Nevbar data={Data[2]["NevbarData"]} />
      <PageAnimation />
      <Homepage data={Data[1]} />
      <About data={Data[0]} />
      <Skills data={Data[4]["SkillsData"]} />
      <Project data={Data[3]["ProjectData"]} />
      <Path data={Data[5]["TimeLineData"]} />
      <Contact />
      <Foot />
    </div>
  );
}

export async function getStaticProps() {
  const DataRef = await getDocs(collection(db, "Data"));
  const Data = DataRef.docs.map((entry) => entry.data());
  return {
    props: { Data }, // will be passed to the page component as props
    revalidate: 1,
  };
}
