import Head from "next/head";

import "../styles/globals.css";

//components
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Designo</title>
        <meta name="description" content="Designo website" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
