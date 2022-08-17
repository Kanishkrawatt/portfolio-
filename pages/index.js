/* eslint-disable @next/next/no-page-custom-font */
import Foot from "../Components/Layout/foot/foot";
import About from "../Components/About/about";
import Head from "next/head";
import Nevbar from "../Components/Layout/nevbar/nevbar";
import Homepage from "../Components/HomePage/Homepage";
import PageAnimation from "../Components/PageAnimation/page";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Libre+Barcode+39+Text&family=Megrim&family=Rum+Raisin&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <Nevbar />
    {/* <PageAnimation /> */}
      <Homepage />
      <About />
      {/* <Map />
      <Contact /> */}
      <Foot />
    </>
  );
}
