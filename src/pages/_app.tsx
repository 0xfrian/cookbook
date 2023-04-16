// Components
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

// Fonts
import "@fontsource/jetbrains-mono";
import Fonts from "../theme/fonts";

// Chakra-UI Theme
import theme from "../theme";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

