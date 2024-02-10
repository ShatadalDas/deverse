"use client";

import { KeyboardEvent, useState } from "react";

type Props = {
  styles: {
    readonly [key: string]: string;
  };
};

function CodeTextArea({ styles }: Props) {
  const [codeInp, setCodeInp] = useState("");

  function handleKeyPress(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.shiftKey && e.key === "Tab") {
      e.preventDefault();
      setCodeInp((state) => state + "   ");
    }
  }

  return (
    <textarea
      id="code-input"
      className={styles.codeTextArea}
      placeholder="eg: print('Hello World')"
      value={codeInp}
      onChange={(e) => setCodeInp(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
}
export default CodeTextArea;
