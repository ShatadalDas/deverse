"use client"

import Image from "next/image";
import styles from "./CopyBtn.module.scss"
import clipboardIcon from "@/assets/clipboard.png";
import doneIcon from "@/assets/done.png";
import { useState } from "react";

type CopyBtnProps = {
  code: string;
};

function CopyBtn({ code }: CopyBtnProps) {
  const [icon, setIcon] = useState(clipboardIcon)

  function handleClick() {
    navigator.clipboard.writeText(code);
    setIcon(doneIcon)
    setTimeout(() => {
      setIcon(clipboardIcon)
    }, 500);
  }

  return (
    <button className={`${styles.clipboard}`} onClick={handleClick}>
      <Image src={icon} alt="clipboard icon" />
    </button>
  );
}

export default CopyBtn