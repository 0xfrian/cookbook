import { Flex, Heading } from "@chakra-ui/react";

export default function CurveContainer({ children, heading }: any) {
  const background: string = "#44475a";

  return (
    <Flex
      id="outer-container"
      flexDirection="column" 
      justifyContent="start" 
      alignItems="center" 
      margin="0px" 
      padding="15px" 
      width="100%" 
      height="100%"
      background="#44475a"
      border="6px double white"
      boxShadow="0 0 0 3px #44475a, 15px 15px 3px black"
    >
      <Flex 
        id="inner-container"
        position="relative"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        margin="10px"
        padding="30px 15px 15px"
        width="100%"
        height="100%"
        minHeight="100px"
        border="1px groove lightgray"
      >
        { /* Heading Container */ }
        <Flex 
          position="absolute" 
          top="-10px"
          flexDirection="row" 
          justifyContent="center" 
          alignItems="center" 
          width="100%"
        >
          <Heading 
            position="relative"
            fontWeight="400" 
            fontSize="14px" 
            padding="0px 8px" 
            background="#44475a"
          >
            {heading}
          </Heading>
        </Flex>

        { /* React component children */ }
        {children}
      </Flex>
    </Flex>
  );
}


