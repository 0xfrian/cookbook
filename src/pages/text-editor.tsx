import {
  Flex,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import CurveContainer from "../components/Core/CurveContainer";
import Editor from "../components/Lexical/Editor";

export default function TextEditor() {
  return (
    <>
      <Head>
        <title>thecoreloop</title>
        <link 
          rel="icon" 
          type="image/x-icon" 
          href="/thecoreloop-favicon.png"
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main Container */}
      <Flex
        id="main-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        position="relative"
        width="100%"
        minHeight="100vh"
        color="white"
        userSelect="none"
      >
        {/* Body Container */}
        <Flex
          id="body-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          marginTop="80px"
          padding="0 30px 30px"
          width="100%"
          height="100%"
        >
          <Flex
            id="content-container"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            gap="50px"
            width="100%"
            maxWidth="800"
            height="100%"
          >
            <CurveContainer heading="HTML Textarea">
              <FormLabel
                htmlFor="text-area"
                paddingBottom="5px"
              >
                Enter text:
              </FormLabel>
              <Textarea
                id="text-area"
                placeholder="hola mundo!"
                height="100px"
                background="rgba(0, 0, 0, 0.4)"
                border="none"
                resize="none"
              />
            </CurveContainer>

            <CurveContainer heading="Lexical">
              <FormLabel
                htmlFor="lexical"
                paddingBottom="5px"
              >
                Enter text:
              </FormLabel>
              <Editor />
            </CurveContainer>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

