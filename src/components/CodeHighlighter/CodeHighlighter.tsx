"use client";

import "./CodeHighlighter.scss";    //? can't use css modules here
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import languages from "@/utils/langArr";
import { AllowArrayElementsOnly } from "@/utils/usefulGenericTypes";


export type LanguagesAllowed = AllowArrayElementsOnly<typeof languages>;

type Props = {
  code: string;
  lang: string;
  className?: string;
};

function CodeHighlighter({ code, lang, className }: Props) {

  return (
    <div className="codeHighlightingWrapper">
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
