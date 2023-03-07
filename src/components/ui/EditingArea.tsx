/*
  Area for editing.
*/

import { useState, useRef } from "react";
import TextArea from "./TextArea";
import { marked } from "marked";
import { cn } from "~/utils/cn";

const EditingArea = () => {
  const [md, setMd] = useState("");
  const taref = useRef<HTMLTextAreaElement>(null);

  const styleDOM = (d: Document) => {
    const nodes = d.querySelectorAll('*')
    console.log("NODES")
    console.log(nodes)
    let i;
    for (i = 0; i < nodes.length; i++) {
      const item = nodes[i];
      if (item !== undefined) {
        let style = "";
        
        if (item.tagName === "H1") {
          style = 'font-extrabold text-5xl mb-2'
        }
        else if (item.tagName === "H2") {
          style = 'font-bold text-4xl mb-2';
        }
        else if (item.tagName === "H3") {
          style = 'font-bold text-3xl'
        }
        else if (item.tagName === "H4") {
          style = 'font-bold text-2xl'
        }
        else if (item.tagName === "H5") {
          style = 'font-bold text-xl'
        }
        else if (item.tagName === "H6") {
          style = 'font-semibold text-xl'
        }
        else if (item.tagName === "UL") {
          style = 'list-disc list-inside'
          if (item.parentNode?.nodeName === "LI") {
            style += ' ml-4'
          } 
        }
        else if (item.tagName === "OL") {
          style = 'list-decimal list-inside'
          if (item.parentNode?.nodeName === "LI") {
            style += ' ml-4'
          } 
        }
        else if (item.tagName === 'A') {
          style = 'text-blue-400 hover:text-blue-200'
        }
        else if (item.tagName === "HR") {
          style = 'my-4'
        }
        else if (item.tagName === 'BLOCKQUOTE') {
          style = 'ml-8'
        }
        item.className = cn(item.className, style)
      }
    }

    d
    return d
  }

  const handleTextInput = () => {
    if (taref.current) {
      const height = taref.current.scrollHeight + 2;
      taref.current.style.height = "inherit";
      taref.current.style.height = `${height}px`;
      const mdParsed = marked.parse(taref.current.value);
      const parser = new DOMParser();
      const parsed = parser.parseFromString(mdParsed, "text/html");
      setMd(styleDOM(parsed).body.innerHTML);
      
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
      <div
        className="break-words rounded-md border py-2 px-3 text-white"
        dangerouslySetInnerHTML={{
          __html:
            md === ""
              ? `<span class="text-slate-400">And see the result in here...</span>`
              : md,
        }}
      ></div>
    </div>
  );
};

export default EditingArea;
