import React from "react";
import { Flex, Text, Box, Button, useOutsideClick } from "@chakra-ui/react";

import Project from "./ui/project";
import ActiveProject from "./ui/activeProject";

import { toolkitObj } from "../toolkit";
import ActiveTool from "./ui/activeTool";

const mockTools = [
  "React",
  "Redux-Saga",
  "TypeScript",
  "Vue.js",
  "Next.js",
  "Angular",
  "React-Router",
  "JavaScript",
  "Svelte",
];

const mockProjects = [
  {
    title: "Roadside assistance",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: ["first duty", "second duty", "third duty"],
    tools: toolkitObj.slice(0, 3),
  },
  {
    title: "Airways security",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: ["first duty", "second duty", "third duty"],
    tools: toolkitObj.slice(0, 6),
  },
  {
    title: "Crypto mining manager",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: ["first duty", "second duty", "third duty"],
    tools: toolkitObj.slice(8, 14),
  },
  {
    title: "Sherlock service",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: ["first duty", "second duty", "third duty"],
    tools: toolkitObj.slice(0, 12),
  },
  {
    title: "Block-chained HR",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: ["first duty", "second duty", "third duty"],
    tools: toolkitObj.slice(10, 11),
  },
];

function Projects({ projects = mockProjects }) {
  const [activeProject, setActiveProject] = React.useState(projects[0]);
  const [isNotified, setNotified] = React.useState(false);
  const ref = React.useRef();
  const [isHovered, setHovered] = React.useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setHovered(false),
  });

  return (
    <Flex direction="column" onMouseEnter={() => setHovered(true)}>
      <Text
        fontSize={["3xl", null, "4xl"]}
        textAlign="left"
        mb="1.5rem"
        fontWeight="700"
        color="yellow.500"
        textTransform="uppercase"
      >
        Projects
      </Text>
      <Flex direction="column">
        <Box w="100%" pr={4} mb="1.5rem">
          <ActiveProject project={activeProject} />
        </Box>
        <Flex
          direction="row"
          flexWrap="wrap"
          justifyContent="start"
          position="relative"
        >
          {projects
            // .filter((item) => item !== activeTool)
            .map((item, idx) => (
              <Project
                key={idx}
                project={item}
                handleClick={setActiveProject}
                isActive={item.title === activeProject.title}
              />
            ))}
          {isHovered && !isNotified && (
            <Box
              ref={ref}
              position="absolute"
              w="160px"
              bottom="90%"
              left="40px"
              bg="yellow.500"
              fontSize="14px"
              fontWeight="400"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              p={2}
              borderTopLeftRadius="12px"
              borderTopRightRadius="12px"
              borderBottomRightRadius="12px"
            >
              <Text mb={2}>Click to get more information.</Text>
              <Button
                bg="none"
                border="1px solid white"
                onClick={() => setNotified(true)}
              >
                Got it!
              </Button>
            </Box>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Projects;
