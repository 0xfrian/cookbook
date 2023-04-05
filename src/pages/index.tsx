// Components
import {
  Button,
  Divider,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import CurveContainer from "../components/CurveContainer";
import DropzoneBox from "../components/DropzoneBox";
import { MdOutlinePhoto as ImageIcon } from "react-icons/md";

// Dependencies
import axios from "axios";
import { v4 as uuid } from "uuid";

// Constants, Functions, and Hooks
const gallery_size: number = 5;
import { useEffect, useState } from "react";

// Types
import type { FormEvent, ReactElement } from "react";
import CurveSubContainer from "../components/CurveSubContainer";

export default function index() {
  // State variables
  const [data, setData] = useState<any[]>(() => {
    let data_init: any[] = [];
    for (let i = 0; i < gallery_size; i++) {
      data_init.push(new Object());
    }
    return data_init;
  });
  const [bucket, setBucket] = useState<string>("");
  const [image, setImage] = useState<string>("");

  function renderGallery() {
    const gallery: ReactElement[] = [];
    for (let i = 0; i < gallery_size; i++) {
      gallery.push(
        <DropzoneBox
          key={uuid()}
          index={i}
          data={data} setData={setData}
        />
      );
    }

    return gallery;
  }

  async function handleUpload() {
    const data_b64s: any[] = [];
    for (let i = 0; i < data.length; i++ ) {
      data_b64s.push({
        name: data[i].name,
        b64s: data[i].b64s,
      });
    }

    const response = await axios.post("/api/upload_images", {
      images: data_b64s,
    });
  }

  async function handleView(event: FormEvent<HTMLElement>) {
    event.preventDefault();
    const image_name: string = (event.target as any).image_name.value;
    const image_b64s: string = (await axios.post("/api/view_image", {
      image_name: image_name,
    })).data.image_b64s;
    setImage(image_b64s);
  }

  useEffect(() => {
    // On mount
    async function init() {
      // Fetch S3 bucket name
      const bucket_name: string = (await axios.get("/api/secret_ingredient"))
        .data?.bucket_name;
      setBucket(bucket_name);
    }

    init();

    // On unmount
    return () => data.forEach(image => URL.revokeObjectURL(image.preview));
  }, []);

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
              <Flex flexDirection="column" width="100%">
                <Heading fontSize="14px" fontWeight="normal">
                  Amazon S3 Bucket: 
                  <Text
                    display="inline"
                    marginLeft="10px"
                    padding="4px 8px"
                    color="white"
                    fontSize="14px"
                    background="blue.400"
                    borderRadius="5px"
                  >
                    {bucket}
                  </Text>
                </Heading>

                <Divider margin="20px 0" border="none" />

                <CurveSubContainer heading="Upload Images">
                  <Flex
                    id="image-gallery"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="30px"
                    padding="20px"
                  >
                    {renderGallery()}
                  </Flex>
                  <Flex
                    id="btn-container"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    marginBottom="10px"
                    width="100%"
                  >
                    <Button
                      variant="main"
                      color="dracula_fg"
                      background="green.400"
                      onClick={handleUpload}
                    >
                      UPLOAD
                    </Button>
                  </Flex>
                </CurveSubContainer>

                <Divider margin="30px 0" border="none" />

                <CurveSubContainer heading="View Image">
                  <Flex
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="start"
                    padding="20px"
                    width="100%"
                  >
                    <form onSubmit={(event) => handleView(event)}>
                      <FormLabel
                        htmlFor="image_name"
                        marginRight="10px"
                        whiteSpace="nowrap"
                      >
                        Image Name:
                      </FormLabel>
                      <Flex alignItems="center" marginBottom="20px">
                        <Input
                          id="image_name"
                          name="image_name"
                          type="text"
                          marginRight="20px"
                          width="100%"
                          maxWidth="250px"
                          fontSize="14px"
                          color="black"
                          background="white"
                          border="none"
                          borderRadius="none"
                          autoComplete="off"
                        />
                        <Button
                          type="submit"
                          variant="main"
                          padding="4px 12px"
                          color="dracula_fg"
                          background="green.400"
                        >
                          VIEW
                        </Button>
                      </Flex>
                    </form>

                    <Flex justifyContent="center" width="100%">
                      {
                        image
                          ? (
                            <Image
                              src={image}
                              width="96px"
                              height="96px"
                              borderRadius="5px"
                            />
                          ) : (
                            <Flex 
                              flexDirection="column"
                              justifyContent="center"
                              alignItems="center"
                              width="96px"
                              height="96px"
                              border="1px solid white"
                              borderRadius="5px"
                            >
                              <ImageIcon size="30px" />
                            </Flex>
                          )
                      }
                    </Flex>
                  </Flex>
                </CurveSubContainer>
              </Flex>
            </CurveContainer>
          </Flex>
        </Flex>
      </main>
    </>
  );
}

