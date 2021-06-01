import { Flex, Square, Image, Stack, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function LeftColumn() {
  return (
    <Flex
      direction={["row", null, "column"]}
      justifyContent={["space-between", null, "start"]}
      alignItems={["center", "stretch"]}
    >
      <Square size="200px" mb={4}>
        <Image
          src="/me.jpg"
          alt="Pavel Yarakhovich"
          borderRadius="full"
          mt="30px"
          mb="30px"
        />
      </Square>
      <Stack>
        <Button bg="#0e76a8" leftIcon={<FaLinkedin />}>
          Linkedin
        </Button>
        <Button bg="#211F1F" leftIcon={<FaGithub />}>
          GitHub
        </Button>
        <Button bg="#DB4437" leftIcon={<SiGmail />}>
          Gmail
        </Button>
      </Stack>
    </Flex>
  );
}

export default LeftColumn;
