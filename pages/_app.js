import "../styles/style.scss";
import Head from "next/head";
import {useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (
    <>
      <Head>
        <title>Space tourism website coding challenge</title>
        <meta
          name="description"
          content="Challenge is to build out this multi-page space tourism website and get it looking as close to the design as possible"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
