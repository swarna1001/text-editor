import React from "react";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

const CodeBlockComponent = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}: any) => (
  <NodeViewWrapper className="relative">
    <select
      contentEditable={false}
      defaultValue={defaultLanguage}
      onChange={(event) => console.log("67667: ", event.target)}
      className="absolute right-2 top-2 rounded"
    >
      <option value="null">auto</option>
      {extension.options.lowlight
        .listLanguages()
        .map((lang: string, index: string) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
    </select>
    <pre>
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>
);

export default CodeBlockComponent;
