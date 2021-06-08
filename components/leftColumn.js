import { Flex, Square, Image, Stack, Button, SlideFade } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function LeftColumn({ inViewOptions }) {
  const { ref, inView } = useInView(inViewOptions);

  return (
    <SlideFade in={inView} offsetY="20px" ref={ref}>
      <Flex
        direction={["column", "row", "column"]}
        justifyContent={["space-between", "space-around", "start"]}
        alignItems={["center", null, "stretch"]}
        mb={["3rem", 0]}
      >
        <Square size="200px" mb={4}>
          <Image
            src="/me.jpg"
            alt="Pavel Yarakhovich"
            borderRadius="full"
            mt="30px"
            mb="30px"
            width="200px"
            height="200px"
          />
        </Square>
        <Flex flexDirection={["row", "row", "column"]}>
          <Button
            as="a"
            href="https://www.linkedin.com/in/pavel-yarohovich/"
            bg="transparent"
            border="2px solid #0e76a8"
            borderRadius="0"
            h="60px"
            letterSpacing="0.1rem"
            leftIcon={<FaLinkedin />}
            mb={3}
          >
            Linkedin
          </Button>
          <Button
            as="a"
            href="https://github.com/Pavel-Yarakhovich"
            bg="transparent"
            border="2px solid #211F1F"
            borderRadius="0"
            h="60px"
            letterSpacing="0.1rem"
            leftIcon={<FaGithub />}
            ml={["1rem", null, 0]}
          >
            GitHub
          </Button>
        </Flex>
      </Flex>
    </SlideFade>
  );
}

export default LeftColumn;
