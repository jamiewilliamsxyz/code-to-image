import "./CodeBlock.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";

const extensions = [javascript({ jsx: true })];

export const CodeBlock = ({ codeRef, theme }) => {
  const [code, setCode] = useState(
    "console.log('hello world!');\n\nfunction greet() {\n  return '👋';\n}"
  );

  return (
    <div ref={codeRef} className="code">
      <CodeMirror
        value={code}
        height="auto"
        width="auto"
        extensions={extensions}
        onChange={(value) => {
          setCode(value);
        }}
        theme={theme}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
          autocompletion: false,
        }}
      />
    </div>
  );
};
