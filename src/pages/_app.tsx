// +-------------+
// |   IMPORTS   |
// +-------------+
// Next.js
import { AppProps } from "next/app";
// NextAuth.js
import { SessionProvider } from "next-auth/react";
// ChakraUI
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
// Fonts
import "@fontsource/jetbrains-mono";
import Fonts from "../theme/fonts";
// CSS Styles (Global)
import "../styles.css";

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

