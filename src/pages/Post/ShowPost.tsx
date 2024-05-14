import { useTheme } from "@/components/theme-provider";
import MDEditor from "@uiw/react-md-editor";
const str = `
### Preview Markdown

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-md-editor-preview-markdown-vrucl?fontsize=14&hidenavigation=1&theme=dark)

\`\`\`jsx
import React from "react";
import ReactDOM from "react-dom";
import MDEditor from '@uiw/react-md-editor';

export default function App() {
  return (
    <div className="container">
      <MDEditor.Markdown source="Hello Markdown!" />
    </div>
  );
}
\`\`\`
`;
export const ShowPost = () => {
  const { theme } = useTheme();
  return (
    <main className="h-[100vh] p-4">
      <div data-color-mode={theme}>
        <MDEditor.Markdown source={str} />
      </div>
    </main>
  );
};
