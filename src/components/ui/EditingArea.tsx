/*
  Area for editing.
*/

import { useState, useRef } from "react";
import TextArea from "./TextArea";

const EditingArea = () => {
  const [md, setMd] = useState("");
  const taref = useRef<HTMLTextAreaElement>(null);

  const handleTextInput = () => {
    setMd(taref.current?.value ?? "");
    if (taref.current) {
      const height = taref.current.scrollHeight + 2;
      taref.current.style.height = "inherit";
      taref.current.style.height = `${height}px`;
    }
  };

  return (
    <div className="grid h-full grid-cols-2 gap-4">
      <TextArea
        ref={taref}
        onChange={handleTextInput}
        className="h-max min-h-fit resize-none text-white"
        placeholder="Type in here..."
      />
      <div className="break-words rounded-md border py-2 px-3 text-white">
        {md === "" ? (
          <span className="text-slate-400">And see the result in here...</span>
        ) : (
          md
        )}
      </div>
    </div>
  );
};

export default EditingArea;
