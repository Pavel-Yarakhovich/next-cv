import React from "react";
import Head from "next/head";
import { Flex, Container } from "@chakra-ui/react";

import { MongoClient } from "mongodb";
import loadable from "@loadable/component";

import { BsPersonCircle, BsTools, BsFiles, BsStar } from "react-icons/bs";

const LeftColumn = loadable(() => import("../components/leftColumn"));
const Presentation = loadable(() => import("../components/presentation"));
const Toolkit = loadable(() => import("../components/toolkit"));
const Projects = loadable(() => import("../components/projects"));
const Certificates = loadable(() => import("../components/certificates.js"));
const MainNavigation = loadable(() =>
  import("../components/layout/MainNavigation.js")
);

const sections = {
  presentation: { icon: BsPersonCircle },
  toolkit: { icon: BsTools },
  projects: { icon: BsFiles },
  certificates: { icon: BsStar },
};

function HomePage(props) {
  const [visibleContent, setVisibleContent] = React.useState("presentation");

  const parRef = React.useRef(null);

  let content;
  switch (visibleContent) {
    case "presentation":
      content = (
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
      );
      break;
    case "toolkit":
      content = (
        <Toolkit
          tools={props.toolkit}
          inViewOptions={{
            threshold: 0.15,
            rootMargin: "0px",
            root: parRef?.current,
            // triggerOnce: true,
          }}
        />
      );
      break;
    case "projects":
      content = (
        <Projects
          projects={props.projects}
          inViewOptions={{
            threshold: 0.15,
            rootMargin: "0px",
            root: parRef?.current,
          }}
        />
      );
      break;
    case "certificates":
      content = <Certificates />;
      break;
    default:
  }

  return (
    <React.Fragment>
      <Head>
        <title>P.Yarakhovich</title>
        <meta name="description" content="Pavel Yarakhovich personal page." />
      </Head>

      <Flex flexDirection="row" height="100vh" overflow="hidden" bg="gray.300">
        <MainNavigation
          sections={sections}
          visibleContent={visibleContent}
          selectContent={setVisibleContent}
        />
        <Container maxW="container.xl" p={4} h="100%" overflow="auto">
          {content}
        </Container>
      </Flex>
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
