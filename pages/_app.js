import { Fragment, useEffect } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";

import Fonts from "../fonts";
import theme from "../theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', 'G-FT6XWLL4HW', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Fragment>
  );
}

export default MyApp;
