import "./CodeBlock.css";
import CodeMirror from "@uiw/react-codemirror";
import { useState, useEffect } from "react";
import { languages } from "../languages";

export const CodeBlock = ({ codeRef, theme, language }) => {
  const [code, setCode] = useState(
    "console.log('hello world!');\n\nfunction greet() {\n  return '👋';\n}"
  );

  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    const loadLanguageExtensions = async () => {
      if (languages[language]) {
        try {
          const ext = await languages[language]();
          if (ext) {
            setExtensions([ext]);
          } else {
            setExtensions([]);
          }
        } catch (error) {
          console.error(`Failed to load language ${language}:`, error);
          setExtensions([]);
        }
      } else {
        setExtensions([]);
      }
    };

    loadLanguageExtensions();
  }, [language]);

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
