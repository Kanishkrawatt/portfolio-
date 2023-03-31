import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import OnLoadAnimation from "../Components/OnLoadAnimation/loadingAnimation";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  // set loading until the page is loaded no setTimeout
  useEffect(() => {
    setTimeout(() => {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    }, 100);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>| Kanishk</title>
      </Head>
      {!loading ? <Component {...pageProps} /> : <OnLoadAnimation />}
    </>
  );
}

export default MyApp;
