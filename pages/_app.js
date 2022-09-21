import '../styles/globals.css'
import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import OnLoadAnimation from '../Components/OnLoadAnimation/loadingAnimation';


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
    setLoading(true)
  }, []);
  
  return (
    <>
      <Head>
        <title>| Kanishk</title>
        <meta name="description" content="I'm a Full Stack Developer,Programmer from India. I have great intrest coding.  " />
        <meta
          name="keywords"
          content="Kanishk, Rawat, Portfolio, ikanishk, Kanishkrawatt"
        />
        <meta name="author" content="Kanishk rawat" />
      </Head>
      {!loading ? (
          <Component {...pageProps} />
      ) : (
        <OnLoadAnimation />
      )}
    </>
  );

}

export default MyApp
