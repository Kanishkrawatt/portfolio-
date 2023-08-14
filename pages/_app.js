import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import OnLoadAnimation from "../Components/OnLoadAnimation/loadingAnimation";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (document.readyState === "complete") {
  //       setLoading(false);
  //     }
  //   }, 100);
  // }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>| Kanishk</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-xxxxxxxxxx"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_FB_measurementId}');
        `}
      </Script>
      {!loading ? <Component {...pageProps} /> : <OnLoadAnimation />}
    </>
  );
}

export default MyApp;
