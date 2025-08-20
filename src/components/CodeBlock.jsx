import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";

export const CodeBlock = () => {
  const [code, setCode] = useState("console.log('hello world!');");

  return (
    <CodeMirror
      value={code}
      height="200px"
      extensions={[javascript({ jsx: true })]}
      onChange={(value) => {
        setCode(value);
      }}
    />
  );
};
