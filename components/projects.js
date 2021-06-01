import React from 'react';
import { Flex, Text, Box, Button, useOutsideClick } from "@chakra-ui/react";

import Project from './ui/project';
import ActiveProject from './ui/activeProject';

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
    title: "Test title",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: [
      'first duty',
      'second duty',
      'third duty',
    ],
    tools: mockTools,
  },
  {
    title: "Test title",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: [
      'first duty',
      'second duty',
      'third duty',
    ],
    tools: mockTools,
  },
  {
    title: "Test title",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: [
      'first duty',
      'second duty',
      'third duty',
    ],
    tools: mockTools,
  },
  {
    title: "Test title",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: [
      'first duty',
      'second duty',
      'third duty',
    ],
    tools: mockTools,
  },
  {
    title: "Test title",
    description:
      "Since my very childhood I’ve always been passionate about creating something either useful, nice-looking or tasty. This passion corresponds with my hobbies: drawing and cooking. The creation process itself gives me a great pleasure, but even more pleasure comes with the realization that the results of my work bring someone benefit or joy.",
    duties: [
      'first duty',
      'second duty',
      'third duty',
    ],
    tools: mockTools,
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
              <Project key={idx} project={item} handleClick={setActiveProject} />
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
