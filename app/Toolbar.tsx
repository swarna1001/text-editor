import { Bold } from "tabler-icons-react";
import { Italic } from "tabler-icons-react";
import { Strikethrough } from "tabler-icons-react";
import { Code } from "tabler-icons-react";
import { LetterP } from "tabler-icons-react";
import { H1 } from "tabler-icons-react";
import { H2 } from "tabler-icons-react";
import { H3 } from "tabler-icons-react";
import { H4 } from "tabler-icons-react";
import { H5 } from "tabler-icons-react";
import { H6 } from "tabler-icons-react";
import { List } from "tabler-icons-react";
import { ListNumbers } from "tabler-icons-react";
import { Blockquote } from "tabler-icons-react";
import { ArrowBackUp } from "tabler-icons-react";
import { ArrowForwardUp } from "tabler-icons-react";
import { FileCode } from "tabler-icons-react";

const Toolbar = ({ editor }: any) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b-2 border-black">
      <div className="my-3 mx-3 flex flex-row flex-wrap justify-between ">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`mr-0.5 rounded p-1  ${
            editor.isActive("bold") ? "bg-black " : ""
          }`}
        >
          <Bold color={`${editor.isActive("bold") ? "white" : "black"}`} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("italic") ? "bg-black" : ""
          }`}
        >
          <Italic color={`${editor.isActive("italic") ? "white" : "black"}`} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("strike") ? "bg-black" : ""
          }`}
        >
          <Strikethrough
            color={`${editor.isActive("strike") ? "white" : "black"}`}
          />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("code") ? "bg-black" : ""
          }`}
        >
          <Code color={`${editor.isActive("code") ? "white" : "black"}`} />
        </button>

        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("paragraph") ? "bg-black" : ""
          }`}
        >
          <LetterP
            color={`${editor.isActive("paragraph") ? "white" : "black"}`}
          />
        </button>

        <div className="divider divider-horizontal my-1 mx-0"></div>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("heading", { level: 1 }) ? "bg-black" : ""
          }`}
        >
          <H1
            color={`${
              editor.isActive("heading", { level: 1 }) ? "white" : "black"
            }`}
          />
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("heading", { level: 2 }) ? "bg-black" : ""
          }`}
        >
          <H2
            color={`${
              editor.isActive("heading", { level: 2 }) ? "white" : "black"
            }`}
          />
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("heading", { level: 3 }) ? "bg-black" : ""
          }`}
        >
          <H3
            color={`${
              editor.isActive("heading", { level: 3 }) ? "white" : "black"
            }`}
          />
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("heading", { level: 4 }) ? "bg-black" : ""
          }`}
        >
          <H4
            color={`${
              editor.isActive("heading", { level: 4 }) ? "white" : "black"
            }`}
          />
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("heading", { level: 5 }) ? "bg-black" : ""
          }`}
        >
          <H5
            color={`${
              editor.isActive("heading", { level: 5 }) ? "white" : "black"
            }`}
          />
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("heading", { level: 6 }) ? "bg-black" : ""
          }`}
        >
          <H6
            color={`${
              editor.isActive("heading", { level: 6 }) ? "white" : "black"
            }`}
          />
        </button>

        <div className="divider divider-horizontal my-1 mx-0"></div>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("bulletList") ? "bg-black" : ""
          }`}
        >
          <List
            color={`${editor.isActive("bulletList") ? "white" : "black"}`}
          />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("orderedList") ? "bg-black" : ""
          }`}
        >
          <ListNumbers
            color={`${editor.isActive("orderedList") ? "white" : "black"}`}
          />
        </button>

        <div className="divider divider-horizontal my-1 mx-0"></div>

        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("codeBlock") ? "bg-black" : ""
          }`}
        >
          <FileCode
            color={`${editor.isActive("codeBlock") ? "white" : "black"}`}
          />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`mr-0.5 rounded p-1 ${
            editor.isActive("blockquote") ? "bg-black" : ""
          }`}
        >
          <Blockquote
            color={`${editor.isActive("blockquote") ? "white" : "black"}`}
          />
        </button>

        <div className="divider divider-horizontal my-1 mx-0"></div>

        <button
          onClick={() => editor.chain().focus().undo().run()}
          className={`mr-0.5 rounded p-1 ${
            !editor.can().chain().focus().undo().run() ? "" : "bg-black"
          }`}
        >
          <ArrowBackUp
            color={`${
              !editor.can().chain().focus().undo().run() ? "black" : "white"
            }`}
          />
        </button>

        <button
          onClick={() => editor.chain().focus().redo().run()}
          className={`mr-0.5 rounded p-1 ${
            !editor.can().chain().focus().redo().run() ? "" : "bg-black"
          }`}
        >
          <ArrowForwardUp
            color={`${
              !editor.can().chain().focus().redo().run() ? "black" : "white"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
