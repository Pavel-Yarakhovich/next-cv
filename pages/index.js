import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import { MongoClient } from "mongodb";
import loadable from "@loadable/component";

const LeftColumn = loadable(() => import("../components/leftColumn"));
const Presentation = loadable(() => import("../components/presentation"));
const Toolkit = loadable(() => import("../components/toolkit"));
const Projects = loadable(() => import("../components/projects"));

function HomePage(props) {
  const parRef = React.useRef(null);
  return (
    <React.Fragment>
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
        <LeftColumn
          inViewOptions={{
            threshold: 0.3,
            rootMargin: "0px",
            root: parRef?.current,
          }}
        />
        <Presentation />
      </Flex>

      <Toolkit
        tools={props.toolkit}
        inViewOptions={{
          threshold: 0.15,
          rootMargin: "0px",
          root: parRef?.current,
          // triggerOnce: true,
        }}
      />
      <Projects
        projects={props.projects}
        inViewOptions={{
          threshold: 0.15,
          rootMargin: "0px",
          root: parRef?.current,
        }}
      />
    </React.Fragment>
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
    "mongodb+srv://Pasha:AQTc2sTLAD0jxa1w@node.lpsx9.mongodb.net/cv?retryWrites=true&w=majority"
  );
  const db = client.db();

  const toolsCollection = db.collection("tools");
  const tools = await toolsCollection.find().toArray();

  const projectsCollection = db.collection("projects");
  const projects = await projectsCollection.find().toArray();

  const toolkit = tools.map((tool) => ({
    id: tool._id.toString(),
    category: tool.category,
    title: tool.title,
    projects: projects.filter((pr) =>
      pr.tools.some((t) => t.toString() === tool._id.toString())
    ).length,
    level: tool.level,
  }));

  client.close();

  return {
    props: {
      toolkit,
      projects: projects.map((p) => ({
        id: p._id.toString(),
        title: p.title,
        description: p.description,
        duties: p.duties,
        tools: p.tools.map((t) =>
          toolkit.find((tool) => tool.id === t.toString())
        ),
      })),
    },
    revalidate: 10, // in seconds
  };
}

export default HomePage;
