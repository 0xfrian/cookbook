import {
  Flex,
  Heading,
} from "@chakra-ui/react";

export default function CurveSubContainer({ children, heading }: any) {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      width="100%"
    >
      <Flex
        position="relative"
        flexDirection="column"
        padding="10px"
        minHeight="50px"
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
            padding="0px 8px"
            fontSize="14px"
            fontWeight="normal"
            background="#44475a"
          >
            {heading}
          </Heading>
        </Flex>

        {/* React Component Children */}
        {children}
      </Flex>
    </Flex>
  );
}


