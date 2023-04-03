// Components
import {
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Head from "next/head";
import CurveContainer from "../components/CurveContainer";

// Hooks
import { useEffect, useState } from "react";

// Types
import { ChangeEvent } from "react";

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

  useEffect(() => {
    if (data) console.log("Base64 String: ", data);
  }, [data]);

  return (
    <>
      <Head>
        <title>Kitchen</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://em-content.zobj.net/thumbs/120/google/350/man-cook_1f468-200d-1f373.png"
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
            width="100%"
            maxWidth="800px"
          >
            <CurveContainer heading="AWS S3">
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
            </CurveContainer>
          </Flex>
        </Flex>
      </main>
    </>
  );
}

