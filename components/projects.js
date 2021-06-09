import React from "react";
import { Flex, Text, Box, SlideFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import Project from "./ui/project";
import ActiveProject from "./ui/activeProject";

const mockProjects = [
  {
    title: "No Projects",
    description: "",
    duties: [],
    tools: [],
  },
];

function Projects({ projects = mockProjects, inViewOptions }) {
  const [activeProject, setActiveProject] = React.useState(projects[0]);
  const { ref, inView } = useInView(inViewOptions);

  return (
    <SlideFade in={inView} offsetY="-30px" ref={ref}>
      <Flex direction="column" mb="3rem">
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
          <Box w="100%" pr={[0, null, 4]} mb="1.5rem">
            <ActiveProject project={activeProject} />
          </Box>
          <Flex
            direction="row"
            flexWrap="wrap"
            justifyContent="start"
            position="relative"
          >
            {projects.map((item, idx) => (
              <Project
                key={idx}
                project={item}
                handleClick={setActiveProject}
                isActive={item.title === activeProject.title}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </SlideFade>
  );
}

export default Projects;
