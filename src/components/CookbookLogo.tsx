// Components
import { Flex, Heading } from "@chakra-ui/react";

export default function CookbookLogo() {
  return (
    <Flex
      flexDirection="column" 
      justifyContent="start" 
      alignItems="center" 
      margin="0px" 
      padding="40px 0"
      width="100%" 
      height="100%"
      background="#44475a"
      border="6px double white"
      boxShadow="0 0 0 3px #44475a, 15px 15px 3px black"
      userSelect="none"
    >
      <Heading fontSize="30px">📖 cookbook</Heading>
    </Flex>
  );
}

