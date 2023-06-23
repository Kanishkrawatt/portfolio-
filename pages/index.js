import db from "../db";

import dynamic from "next/dynamic";

const Foot = dynamic(() => import("../Components/Layout/foot/foot"));
const About = dynamic(() => import("../Components/About/about"));
const Path = dynamic(() => import("../Components/Timeline/path"));
const Nevbar = dynamic(() => import("../Components/Layout/nevbar/nevbar"));
import Homepage from "../Components/HomePage/Homepage";
const Contact = dynamic(() => import("../Components/Contact"));
const Project = dynamic(() => import("../Components/Project/Project"));
const Skills = dynamic(() => import("../Components/Skills"));
const PageAnimation = dynamic(() => import("../Components/PageAnimation/page"));

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
