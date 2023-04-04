// Components
import {
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import Head from "next/head";
import CurveContainer from "../components/CurveContainer";

// Constants, Functions, and Hooks
import axios from "axios";
import { useEffect, useState } from "react";

// Types
import type { ChangeEvent } from "react";
import type { AxiosResponse } from "axios";

export default function index() {
  const [data, setData] = useState<string | ArrayBuffer>();

  async function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    // Define files
    const files: FileList = event.target.files!;
    const image_file: File = files[0];

    // Store image file as base64 string
    const reader = new FileReader();
    reader.readAsDataURL(image_file);
    reader.onload = () => setData(reader.result!);
  }

  async function handleSendGETRequest() {
    const response: AxiosResponse = await axios({
      method: "GET",
      url: "/api/",
    });
    console.log("Response: ", response.data.name);
  }

  useEffect(() => {
    if (data) console.log("Base64 String: ", data);
  }, [data]);

  return (
    <>
      <Head>
        <title>cookbook</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://em-content.zobj.net/thumbs/120/google/350/open-book_1f4d6.png"
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main Container */}
      <main>
        <Flex
          id="root-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          position="relative"
          width="100%"
          minHeight="100vh"
        >
          <Flex
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            padding="40px 0"
            gap="50px"
            width="100%"
            maxWidth="800px"
          >
            <Flex
              id="outer-container"
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

            <CurveContainer heading="AWS S3">
              <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="20px"
                width="100%"
              >
                <FormLabel htmlFor="sample-image" >
                  Upload an image
                </FormLabel>
                <Input
                  id="sample-image"
                  type="file"
                  margin="0"
                  padding="0"
                  width="min-content"
                  height="min-content"
                  fontSize="14px"
                  border="none"
                  borderRadius="0"
                  multiple={false}
                  onChange={handleFiles}
                />
              </Flex>
            </CurveContainer>

            <CurveContainer heading="Next.js API">
              <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="20px"
                width="100%"
              >
                <FormLabel htmlFor="send-get-request">
                  Send GET Request
                </FormLabel>
                <Button
                  id="send-get-request"
                  variant="main"
                  onClick={handleSendGETRequest}
                >
                  SEND
                </Button>
              </Flex>
            </CurveContainer>
          </Flex>
        </Flex>
      </main>
    </>
  );
}

