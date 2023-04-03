// Components
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

// Fonts
import "@fontsource/jetbrains-mono";

// Chakra-UI Theme
import theme from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

