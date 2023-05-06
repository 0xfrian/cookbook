// Components
import {
  Flex,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
import CookbookLogo from "../components/Core/CookbookLogo";
import CurveContainer from "../components/Core/CurveContainer";

export default function index() {
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
            <CookbookLogo />

            <CurveContainer heading="Index">
              <Flex
                flexDirection="row"
                gap="25px"
              >
                <Link
                  href="/authentication"
                  variant="standard"
                >
                  Authentication
                </Link>
                <Link
                  href="/s3"
                  variant="standard"
                >
                  AWS S3
                </Link>
                <Link
                  href="/text-editor"
                  variant="standard"
                >
                  Text Editor
                </Link>
              </Flex>
            </CurveContainer>
          </Flex>
        </Flex>
      </main>
    </>
  );
}

