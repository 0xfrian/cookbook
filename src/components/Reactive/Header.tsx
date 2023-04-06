// Components
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  BsBellFill as NotificationIcon,
  BsFillChatLeftFill as ChatIcon,
} from "react-icons/bs"

export default function Header() {
  const react_tokens: number = 1234;

  return (
    <Grid
      id="header"
      gridTemplateColumns="1fr 1fr 1fr"
      padding="10px"
      width="100%"
      fontFamily="Avenir LT Pro"
      background="rgba(0, 0, 0, 0.2)"
      // background="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(12px)"
    >
      <GridItem id="left-section">
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="50px"
          height="100%"
        >
          <Image
            src="/reactive-logo.png"
            position="relative"
            bottom="2px"
            width="auto"
            height="30px"
            objectFit="cover"
            cursor="pointer"
            transition="filter 200ms ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
          />
          <Text
            color="#C8C8C8"
            fontSize="18px"
            cursor="pointer"
            transition="all 200ms ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
          >
            Communities
          </Text>
        </Flex>
      </GridItem>

      <GridItem id="middle-section">
        <Heading
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          height="100%"
          color="white"
          fontSize="18px"
          fontWeight="normal"
          lineHeight="base"
          cursor="default"
        >
          Home
        </Heading>
      </GridItem>

      <GridItem id="right-section">
        <Flex
          flexDirection="row"
          justifyContent="end"
          alignItems="center"
          gap="30px"
          width="100%"
        >
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="20px"
          >
            <Flex
              id="chat-notif-container"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="20px"
            >
              <Tooltip
                label="Chat coming soon!"
                arrowSize={12}
                placement="bottom"
                hasArrow
              >
                <Box
                  padding="7px"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="gray.400"
                  borderRadius="5px"
                  cursor="not-allowed"
                >
                  <ChatIcon color="#E2E8F0" size="15px" />
                </Box>
              </Tooltip>
              <Tooltip
                label="Notifications coming soon!"
                arrowSize={12}
                placement="bottom"
                hasArrow
              >
                <Box
                  padding="7px"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="gray.400"
                  borderRadius="5px"
                  cursor="not-allowed"
                >
                  <NotificationIcon color="#E2E8F0" size="15px" />
                </Box>
              </Tooltip>
            </Flex>
            <Divider
              orientation="vertical"
              height="30px"
              borderLeft="1px solid rgba(147, 147, 147, 0.5)"
              opacity="100%"
            />
            <Tooltip
              label="$REACT tokens"
              placement="bottom"
              arrowSize={12}
              offset={[-50, 12]}
              hasArrow
            >
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                gap="10px"
                cursor="default"
              >
                <Image
                  src="./reactive-token.png"
                  width="20px"
                  height="20px"
                />
                <Text
                  color="#C8C8C8"
                  fontSize="14px"
                  fontWeight="bold"
                >
                  {react_tokens.toLocaleString("en-US")}
                </Text>
              </Flex>
            </Tooltip>
          </Flex>

          <Image
            id="profile-pic"
            src="https://arcanist-platform.s3.amazonaws.com/daaa6be7-cb45-4ccf-a005-0ab5091e976f"
            width="40px"
            height="40px"
            borderRadius="full"
            boxShadow="3px 3px 3px black"
            cursor="pointer"
            transition="all 200ms ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}



