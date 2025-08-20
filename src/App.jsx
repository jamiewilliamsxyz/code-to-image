import "./App.css";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { CodeBlock } from "./components/CodeBlock";
import { DownloadButton } from "./components/DownloadButton";

export const App = () => {
  const codeRef = useRef(null);

  const handleDownload = async () => {
    if (!codeRef.current) return;

    try {
      const dataUrl = await toPng(codeRef.current, {
        cacheBust: true,
        fontEmbedCSS: "",
      });
      const link = document.createElement("a");
      link.download = "code-block.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to capture code block", err);
    }
  };

  return (
    <>
      <p style={{ color: "white" }}>
        Work In Progress: Will add themes & more languages
      </p>
      <CodeBlock codeRef={codeRef} />
      <DownloadButton onDownload={handleDownload} />
    </>
  );
};

export default App;
