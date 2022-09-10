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
        <title>Kanishk</title>
        <meta name="description" content="| Kanishk rawat" />
        <link rel="icon" href="/logo.png"/>
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
