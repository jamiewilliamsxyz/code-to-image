import "./CodeBlock.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";

const extensions = [javascript({ jsx: true })];

export const CodeBlock = ({ codeRef }) => {
  const [code, setCode] = useState("console.log('hello world!');\n\n\n\n");

  return (
    <div ref={codeRef} className="code">
      <CodeMirror
        value={code}
        extensions={extensions}
        onChange={(value) => {
          setCode(value);
        }}
      />
    </div>
  );
};
