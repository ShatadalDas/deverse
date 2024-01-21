"use client";

import "./CodeHighlighter.scss";    //? can't use css modules here
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import languages from "@/utils/langArr";
import { AllowArrayElementsOnly } from "@/utils/usefulGenericTypes";
import Image from "next/image";
import { useState } from "react";
import clipboardIcon from "../../assets/clipboard.png";
import doneIcon from "../../assets/done.png";

type LanguagesAllowed = AllowArrayElementsOnly<typeof languages>;

type Props = {
  code: string;
  lang: LanguagesAllowed;
  className?: string;
};

function CodeHighlighter({ code, lang, className }: Props) {
  const [icon, setIcon] = useState(clipboardIcon);

  function handleCopy() {
    navigator.clipboard.writeText(code.trim());
    setIcon(doneIcon);
    setTimeout(() => {
      setIcon(clipboardIcon);
    }, 500);
  }

  return (
    <div onClick={handleCopy} className="codeHighlightingWrapper">
      <Image className="copyIcon" src={icon} alt="clipboard icon" />
      <SyntaxHighlighter
        language={lang}
        style={theme}
        showLineNumbers
        wrapLines
        className={`codeBlock ${className}`}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeHighlighter;
