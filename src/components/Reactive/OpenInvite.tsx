// Components
import {
  Button,
  Flex,
  Link,
  Modal,
  ModalContent,
  // ModalOverlay,
  Text,
} from "@chakra-ui/react";

export default function OpenInvite({ isOpen, onClose, mode }: any) {
  function renderControls() {
    if (mode == "A2") {
      return (
        <Flex
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          marginTop="30px"
          width="100%"
        >
          <Button
            width="100%"
            fontSize="18px"
            fontWeight="normal"
            background="#4064E4"
            borderRadius="3px"
            transition="filter 200ms ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
            _active={{ }}
          >
            Accept Invitation
          </Button>
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop="10px"
            width="100%"
            userSelect="none"
          >
            <Text>
              <Link
                href="https://app.reactive.land/get-started"
                color="#4064E4"
                textDecoration="underline"
                transition="all 200ms ease-in-out"
                _hover={{
                  filter: "brightness(0.8)"
                }}
              >
                Create Account
              </Link>
              {` or `}
              <Link
                href="https://app.reactive.land/"
                color="#4064E4"
                textDecoration="underline"
                transition="all 200ms ease-in-out"
                _hover={{
                  filter: "brightness(0.8)"
                }}
              >
                Log into another account
              </Link>
            </Text>
          </Flex>
        </Flex>
      );
    } else if (mode == "A3") {
      return (
        <Flex
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          marginTop="30px"
          gap="8px"
          width="100%"
        >
          <Link
            href="https://app.reactive.land/get-started"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
            minHeight="40px"
            fontSize="18px"
            fontWeight="normal"
            background="#4064E4"
            borderRadius="3px"
            transition="filter 200ms ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
            _active={{ }}
          >
            Create Account
          </Link>
          <Text>or</Text>
          <Link
            href="https://app.reactive.land/"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
            minHeight="40px"
            fontSize="18px"
            fontWeight="normal"
            background="transparent"
            border="2px solid #4064E4"
            borderRadius="3px"
            transition="filter 200ms ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
            _active={{ }}
          >
            Log In
          </Link>
        </Flex>
      );
    } else {
      return null;
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      {/* <ModalOverlay /> */}
      <ModalContent
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        padding="20px"
        position="relative"
        bottom="100px"
        width="600px"
        minWidth="600px"
        maxWidth="600px"
        color="white"
        fontSize="16px"
        fontFamily="Avenir LT Pro"
        background="rgba(26, 29, 36, 0.8)"
        borderRadius="3px"
      >
        <Flex flexDirection="column" gap="20px" width="100%">
          <Text width="100%" textAlign="center">
            You've been invited to join [Community] alongside [Inviter] and [# of Members] members.
          </Text>
          <Text width="100%" textAlign="center">
            Follow one of the prompts below to accept.
          </Text>
        </Flex>

        {renderControls()}
      </ModalContent>
    </Modal>
  );
}

