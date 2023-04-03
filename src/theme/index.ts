// Functions
import { extendTheme } from "@chakra-ui/react";

// Chakra-UI Custom Theme
export default extendTheme({
  fonts: {
    heading: `"JetBrains Mono", sans-serif`,
    body: `"JetBrains Mono", sans-serif`,
  },
  styles: {
    colors: {
      dracula_bg: "#282a36",
    },
    global: {
      body: {
        margin: "0px", 
        padding: "0px",
        color: "white",
        fontSize: "14px",
        fontFamily: `"JetBrains Mono", sans-serif`,
        background: "#282a36",
        scrollBehavior: "smooth",
      },
      "*::-webkit-scrollbar": {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "5px",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      },
    },
  },
});

