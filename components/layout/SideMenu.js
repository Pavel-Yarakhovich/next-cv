import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Input,
  Textarea,
  Text,
  Stack,
  Divider,
  useToast,
} from "@chakra-ui/react";

import CopyableText from "../ui/copyableText";

export function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();

  const sendMessage = () => {
    // check empty fields
    // validate email
    // send message
    toast({
      title: "Hurrray!!",
      description: "Your message's been delivered!",
      status: "success",
      duration: 4000,
      isClosable: true,
    })
  }

  return (
    <>
      <Button
        ref={btnRef}
        color="green.200"
        letterSpacing="0.01rem"
        onClick={onOpen}
      >
        Contacts
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader fontSize="2rem">My contacts</DrawerHeader>

          <DrawerBody display="flex" flexDirection="column" alignItems="center">
            <Text mb={3} textAlign="center">
              To contact me you can use my phone number
            </Text>
            <CopyableText value="+375295559280" text="+375 29 555-92-80" />
            <Divider />
            <Text mb={3} textAlign="center">
              or this email
            </Text>
            <CopyableText value="pavel.yarri@gmail.com" />
            <Divider />
            <Text mb={3}>or reach me with the form below</Text>

            <Stack spacing={3}>
              <Input placeholder="Your email" size="md" />
              <Input placeholder="Subject" size="md" />
              <Textarea
                placeholder="Message..."
                size="md"
                h="200px"
                resize="none"
              />
              <Button onClick={sendMessage} variant="outline">
                Send
              </Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
