import "./App.css";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { CodeBlock } from "./components/CodeBlock";
import { DownloadButton } from "./components/DownloadButton";
import { ThemeDropdown } from "./components/ThemeDropdown";
import { LanguageDropdown } from "./components/LanguageDropdown";
import { themes } from "./themes";

export const App = () => {
  const [theme, setTheme] = useState("githubLight");
  const [language, setLanguage] = useState("javascript");

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
      <h1>Code to Image</h1>
      <div className="dropdown-container">
        <ThemeDropdown theme={theme} setTheme={setTheme} />
        <LanguageDropdown language={language} setLanguage={setLanguage} />
      </div>
      <CodeBlock codeRef={codeRef} theme={themes[theme]} language={language} />
      <DownloadButton onDownload={handleDownload} />
    </>
  );
};

export default App;
