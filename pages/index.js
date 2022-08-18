/* eslint-disable @next/next/no-page-custom-font */
import Foot from "../Components/Layout/foot/foot";
import About from "../Components/About/about";
import Path from "../Components/Path/path";
import Nevbar from "../Components/Layout/nevbar/nevbar";
import Homepage from "../Components/HomePage/Homepage";
import PageAnimation from "../Components/PageAnimation/page";
export default function Home() {
  return (
    <>
      
      <Nevbar />
    {/* <PageAnimation /> */}
      <Homepage />
      <About />
      <Path />
      {/* <Contact /> */}
      <Foot />
    </>
  );
}
