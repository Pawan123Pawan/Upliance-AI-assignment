import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const config = {
  buttons: [
    "source",
    "|",
    "bold",
    "italic",
    "underline",
    "|",
    "ul",
    "ol",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "image",
    "table",
    "link",
    "|",
    "left",
    "center",
    "right",
    "justify",
    "|",
    "undo",
    "redo",
    "|",
    "hr",
    "eraser",
    "fullsize",
  ],
};

const RichTextEditor = () => {
  const editor = useRef(null);
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };

  return (
    <div className="w-full h-screen flex justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="mt-28 bg-white h-96 rounded-lg px-5">
        <JoditEditor
          ref={editor}
          value={value}
          config={config}
          tabIndex={1}
          onChange={(newContent) => getValue(newContent)}
        />
        <div>{value}</div>
      </div>
    </div>
  );
};

export default RichTextEditor;
