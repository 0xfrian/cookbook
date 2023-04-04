// Components
import Button from "./components/Button";
import FormLabel from "./components/FormLabel";

// Functions
import { extendTheme } from "@chakra-ui/react";

// Chakra-UI Custom Theme
export default extendTheme({
  components: {
    Button,
    FormLabel,
  },
  fonts: {
    heading: `"JetBrains Mono", sans-serif`,
    body: `"JetBrains Mono", sans-serif`,
  },
  styles: {
    colors: {
      // Dracula Theme
      dracula_bg: "#282a36",
      dracula_fg: "#f8f8f2",
      dracula_fg_alt: "#6272a4",
      blue: "#8be9fd",
      green: "#50fa7b",
      orange: "#ffb86c",
      pink: "#ff79c6",
      purple: "#bd93f9",
      red: "#ff5555",
      yellow: "#f1fa8c",
    },
    global: {
      body: {
        margin: "0px", 
        padding: "0px",
        color: "#f8f8f2",
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

