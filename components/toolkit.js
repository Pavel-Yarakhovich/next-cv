import React from "react";
import { Box, Text, Flex, SlideFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import Tool from "./ui/tool";
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

function Toolkit({ tools = mockTools, inViewOptions }) {
  const [activeTool, setActiveTool] = React.useState(tools[0]);
  const [filter, setFilter] = React.useState("");
  const { ref, inView } = useInView(inViewOptions);

  const handleToggle = React.useCallback((category) => {
    setFilter((prev) => (prev ? "" : category));
  });

  return (
    <SlideFade in={inView} offsetY="-30px" ref={ref}>
      <Flex direction="column" mb="3rem">
        <Text
          fontSize={["3xl", null, "4xl"]}
          textAlign="left"
          mb="1.5rem"
          fontWeight="700"
          color="green.300"
          textTransform="uppercase"
        >
          Toolkit
        </Text>
        <Flex
          direction={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Box
            w={["100%", null, "40%"]}
            pr={[0, null, 4]}
            mb={["1.5rem", null, 0]}
          >
            <ActiveTool tool={activeTool} toggleByCategory={handleToggle} />
          </Box>
          <Flex
            direction="row"
            flexWrap="wrap"
            w={["100%", null, "60%"]}
            justifyContent="start"
            position="relative"
            alignContent="flex-start"
          >
            {tools
              .filter((tool) => (filter ? tool.category === filter : true))
              .map((item) => (
                <Tool
                  key={item.id}
                  tool={item}
                  handleClick={setActiveTool}
                  isActive={item.title === activeTool.title}
                  chosenCategory={activeTool.category}
                />
              ))}
          </Flex>
        </Flex>
      </Flex>
    </SlideFade>
  );
}

export default Toolkit;
