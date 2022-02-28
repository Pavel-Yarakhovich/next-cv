import { Fragment } from "react";
import Head from "next/head";
import MainNavigation from "./MainNavigation";
import { Container, Flex } from "@chakra-ui/react";

function Layout(props) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {props.children}
    </Fragment>
  );
}

export default Layout;
