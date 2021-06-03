import React from "react";
import { Box, Text, Flex, useOutsideClick, Button } from "@chakra-ui/react";

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

function Toolkit({ tools = mockTools }) {
  const [activeTool, setActiveTool] = React.useState(tools[0]);
  const [isNotified, setNotified] = React.useState(false);
  const ref = React.useRef();
  const [isHovered, setHovered] = React.useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setHovered(false),
  });

  return (
    <Flex direction="column" onMouseEnter={() => setHovered(true)} mb="3rem">
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
      <Flex direction={["column", null, "row"]} justifyContent="space-between">
        <Box w={["100%", null, "40%"]} pr={4} mb={["1.5rem", null, 0]}>
          <ActiveTool tool={activeTool} />
        </Box>
        <Flex
          direction="row"
          flexWrap="wrap"
          w={["100%", null, "60%"]}
          justifyContent="start"
          position="relative"
        >
          {tools.map((item, idx) => (
            <Tool
              key={idx}
              tool={item}
              handleClick={setActiveTool}
              isActive={item.title === activeTool.title}
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

export default Toolkit;
