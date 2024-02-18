"use client"

import Image from "next/image";
import styles from "./CopyBtn.module.scss"
import clipboardIcon from "@/assets/clipboard.png";
import doneIcon from "@/assets/done.png";
import { useState } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";

type CopyBtnProps = {
  code: string;
};

function CopyBtn({ code }: CopyBtnProps) {
  const [icon, setIcon] = useState(clipboardIcon)
  const [text, setText] = useState("copy")

  function handleClick() {
    navigator.clipboard.writeText(code);
    setIcon(doneIcon)
    setText("copied")
    
    setTimeout(() => {
      setIcon(clipboardIcon)
      setText("copy")
    }, 500);
  }

  return (
    <button className={`${styles.clipboard}`} onClick={handleClick} data-text={text}>
      <Image src={icon} alt="clipboard icon" />
    </button>
  );
}

export default CopyBtn