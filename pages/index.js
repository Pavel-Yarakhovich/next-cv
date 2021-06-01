import { Fragment } from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import { MongoClient } from "mongodb";

import LeftColumn from "../components/leftColumn";
import Presentation from "../components/presentation";
import Toolkit from "../components/toolkit";
import Projects from "../components/projects";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>P.Yarakhovich</title>
        <meta name="description" content="Pavel Yarakhovich personal page." />
      </Head>

      <Flex
        color="white"
        justifySelf="center"
        minHeight="70vh"
        direction={["column", null, "row"]}
        mb={5}
      >
        <LeftColumn />
        <Presentation />
      </Flex>

      <Toolkit />
      <Projects />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: MOCK_MEETUP,
//     },
//   };
// }

// getStaticProps function is called before HomePage function
// never executes on the client
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://Pasha:AQTc2sTLAD0jxa1w@node.lpsx9.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // in seconds
  };
}

export default HomePage;
