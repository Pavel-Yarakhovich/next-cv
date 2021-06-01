import { Flex, Stack, Text } from "@chakra-ui/react";

function Presentation() {
  return (
    <Flex flex="1" alignItems="center" justifyContent="flex-end">
      <Stack spacing={3} color="grass.200">
        <Text
          fontSize={["5xl", "6xl", "86px"]}
          lineHeight="1"
          mb="1.5rem"
          textAlign="right"
          fontWeight="900"
          color="green.200"
        >
          Pavel
          <br />
          Yarakhovich
        </Text>
        <Text
          fontSize={["2xl", null, "3xl"]}
          textAlign="right"
          mb="1.5rem"
          fontWeight="700"
        >
          front-end developer
        </Text>
        <Text
          fontSize={["14px", "16px", "20px"]}
          textAlign="right"
          pl={3}
          fontWeight="400"
        >
          Since my very childhood I’ve always been passionate about creating
          something either useful, nice-looking or tasty. This passion
          corresponds with my hobbies: drawing and cooking. The creation process
          itself gives me a great pleasure, but even more pleasure comes with
          the realization that the results of my work bring someone benefit or
          joy.
          <br /> This probably best describes why I’m happy being a front-end
          developer. Front-end development gave me the best way to satisfy my
          aspirations and keeps bringing me joy day by day. The things I’m able
          to create now are both nice-looking, “tasty” and useful.
          <br /> Plenty of frameworks, libraries and tools makes me persistently
          look for ideas to enhance my creation process hence to polish the
          results of my work.
          <br />I have a long way to go and I enjoy every step.
        </Text>
      </Stack>
    </Flex>
  );
}

export default Presentation;
