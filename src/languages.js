import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { xml } from "@codemirror/lang-xml";
import { sql } from "@codemirror/lang-sql";

import { loadLanguage } from "@uiw/codemirror-extensions-langs";

export const languages = {
  javascript: () => Promise.resolve(javascript()),
  typescript: () => Promise.resolve(javascript({ typescript: true })),
  jsx: () => Promise.resolve(javascript({ jsx: true })),
  tsx: () => Promise.resolve(javascript({ jsx: true, typescript: true })),
  python: () => Promise.resolve(python()),
  java: () => loadLanguage("java"),
  go: () => loadLanguage("go"),
  cpp: () => loadLanguage("cpp"),
  csharp: () => Promise.resolve(javascript()),
  php: () => Promise.resolve(javascript()),
  swift: () => loadLanguage("swift"),
  kotlin: () => Promise.resolve(javascript()),
  lua: () => loadLanguage("lua"),
  html: () => Promise.resolve(html()),
  css: () => Promise.resolve(css()),
  json: () => Promise.resolve(json()),
  markdown: () => Promise.resolve(markdown()),
  sql: () => Promise.resolve(sql()),
  xml: () => Promise.resolve(xml()),
  yaml: () => loadLanguage("yaml"),
};
