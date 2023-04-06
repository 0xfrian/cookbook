// Components
import {
  Button,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
// import Header from "../components/Reactive/Header";
import AcceptInvite from "../components/Reactive/AcceptInvite";
import OpenInvite from "../components/Reactive/OpenInvite";

// Functions and Hooks
import { useState } from "react"
import { useDisclosure } from "@chakra-ui/react";

export default function test() {
  // State variables
  const [open_mode, setOpenMode] = useState<string>("A2");
  const [accept_mode, setAcceptMode] = useState<string>("D1a");

  // useDisclosure: Open Invite
  const {
    isOpen: isOpen_OpenInvite,
    onOpen: onOpen_OpenInvite,
    onClose: onClose_OpenInvite
  } = useDisclosure();

  // useDisclosure: Accept Invite
  const {
    isOpen: isOpen_AcceptInvite,
    onOpen: onOpen_AcceptInvite,
    onClose: onClose_AcceptInvite
  } = useDisclosure();

  function handleOpenInvite(mode: string) {
    setOpenMode(mode);
    onOpen_OpenInvite();
  }
  
  function handleAcceptInvite(mode: string) {
    setAcceptMode(mode);
    onOpen_AcceptInvite();
  }

  return (
    <>
      <Head>
        <title>Reactive Labs</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://em-content.zobj.net/thumbs/120/google/350/test-tube_1f9ea.png"
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Flex
        id="root-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        position="relative"
        width="100%"
        minHeight="100vh"
        fontFamily="Avenir LT Pro"
        backgroundImage="./two-worlds.jpg"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        {/* <Header /> */}

        <Flex
          id="body"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          padding="30px"
          width="100%"
          height="100%"
        >
          <Flex
            id="controls-container"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="30px"
            position="absolute"
            bottom="0"
            marginBottom="30px"
            padding="20px"
            minWidth="400px"
            maxWidth="800px"
            background="rgba(0, 0, 0, 0.2)"
            backdropFilter="blur(10px)"
            borderRadius="5px"
            opacity={
              isOpen_OpenInvite || isOpen_AcceptInvite
                ? "0%"
                : "100%"
            }
            transition="all 200ms linear 100ms"
          >
            {/* Open Invite */}
            <Button
              variant="main"
              onClick={() => handleOpenInvite("A2")}
            >
              A-2
            </Button>
            <Button
              variant="main"
              onClick={() => handleOpenInvite("A3")}
            >
              A-3
            </Button>
            <OpenInvite
              isOpen={isOpen_OpenInvite}
              onClose={onClose_OpenInvite}
              mode={open_mode}
            />

            {/* Accept Invite */}
            <Button
              variant="main"
              onClick={() => handleAcceptInvite("D1a")}
            >
              D-1a
            </Button>
            <Button
              variant="main"
              onClick={() => handleAcceptInvite("D1b")}
            >
              D-2b
            </Button>
            <AcceptInvite
              isOpen={isOpen_AcceptInvite}
              onClose={onClose_AcceptInvite}
              mode={accept_mode}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}


