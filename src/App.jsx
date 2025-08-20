import "./App.css";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { CodeBlock } from "./components/CodeBlock";
import { DownloadButton } from "./components/DownloadButton";
import { ThemeDropdown } from "./components/ThemeDropdown";
import { themes } from "./themes";

export const App = () => {
  const [theme, setTheme] = useState("githubLight");

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
        Work in progress: languages selection coming soon
      </p>
      <ThemeDropdown theme={theme} setTheme={setTheme} />
      <CodeBlock codeRef={codeRef} theme={themes[theme]} />
      <DownloadButton onDownload={handleDownload} />
    </>
  );
};

export default App;
