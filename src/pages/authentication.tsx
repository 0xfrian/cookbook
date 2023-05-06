// Components
import {
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import Head from "next/head";
import CookbookLogo from "../components/Core/CookbookLogo";
import CurveContainer from "../components/Core/CurveContainer";

// Functions, Hooks
import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function authentication() {
  // Session data
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("Status: ", status);
    console.log("Session: ", session);
  }, [session]);

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

            <CurveContainer heading="NextAuth">
              <Button
                variant="standard"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="10px"
                onClick={() => signIn("google")}
              >
                <GoogleIcon size="20px" />
                <Text>Log in with Google</Text>
              </Button>
            </CurveContainer>
          </Flex>
        </Flex>
      </main>
    </>
  );
}


