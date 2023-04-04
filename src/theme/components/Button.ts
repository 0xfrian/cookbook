import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const main = defineStyle({
  margin: "0",
  padding: "4px 8px",
  width: "min-content",
  height: "min-content",
  color: "#282a36",
  fontWeight: "normal",
  background: "#f8f8f2",
  border: "none",
  borderRadius: "0",
  boxShadow: "5px 5px 1px black",
  transition: "all 200ms ease-in-out",
  _hover: {
    filter: "brightness(0.8)",
  },
  _active: {
    boxShadow: "none",
    filter: "brightness(1.0)",
    transform: "translate(5px, 5px)",
  }
})

const Button = defineStyleConfig({ variants: { main } });

export default Button;
