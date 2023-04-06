// Components
import {
  Button,
  Flex,
  Image,
  Modal,
  ModalContent,
  // ModalOverlay,
  Text,
} from "@chakra-ui/react";

export default function AcceptInvite({ isOpen, onClose, mode }: any) {
  function renderControls() {
    if (mode == "D1a") {
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
            Navigate to Community
          </Button>
        </Flex>
      );
    } else if (mode == "D1b") {
      return (
        <Flex
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          marginTop="15px"
          gap="20px"
          width="100%"
        >
          <Text>
            Your membership has been sent to your Reactive Wallet
          </Text>
          <Flex
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            gap="5px"
            width="100%"
          >
            <Image
              src="/neon-motorcycle.jpeg"
              width="360px"
              height="360px"
            />
            <Text>
              [NFT Item Name and Number]
            </Text>
            <Text>
              [NFT Collection Name]
            </Text>
          </Flex>
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
            Navigate to Community
          </Button>
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
        alignItems="center"
        padding="20px"
        position="relative"
        bottom={mode == "A2" ? "100px" : "50px"}
        width="600px"
        minWidth="600px"
        maxWidth="600px"
        color="white"
        fontSize="16px"
        fontFamily="Avenir LT Pro"
        background="rgba(26, 29, 36, 0.8)"
        borderRadius="3px"
      >
        <Text>
          Congratuations, you're in!
        </Text>

        {renderControls()}
      </ModalContent>
    </Modal>
  );
}


