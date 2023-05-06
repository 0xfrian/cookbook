// +-------------+
// |   IMPORTS   |
// +-------------+
// ChakraUI
import { Flex, Text } from "@chakra-ui/react";
// Lexical
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import {
  initial_config
} from "../../utils/lexical";

export default function Editor() {
  return (
    <LexicalComposer initialConfig={initial_config}>
      <div className="editor-container">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<p className="editor-placeholder">hola mundo!</p>}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
    </LexicalComposer>
  );
}

