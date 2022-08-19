/* eslint-disable @next/next/no-page-custom-font */
import Foot from "../Components/Layout/foot/foot";
import About from "../Components/About/about";
import Path from "../Components/Timeline/path";
import Nevbar from "../Components/Layout/nevbar/nevbar";
import Homepage from "../Components/HomePage/Homepage";
import PageAnimation from "../Components/PageAnimation/page";
import Contact from "../Components/Contact";
export default function Home() {
  return (
    <>
      
      <Nevbar />
    {/* <PageAnimation /> */}
      <Homepage />
      <About />
      <Path />
      <Contact />
      <Foot />
    </>
  );
}
