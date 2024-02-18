"use client";

import Image from "next/image";
import styles from "./CommentBtn.module.scss";
import formatNumberWithAbbreviation from "@/utils/formatNumberWithAbbreviation";
import commentIcon from "@/assets/comment-icon.png";
import { useState } from "react";

type CommentBtnProps = {
  totalComments: number;
};

function CommentBtn({ totalComments }: CommentBtnProps) {
  const [commented, setCommented] = useState(false);
  return (
    <button
      onClick={() => setCommented((state) => !state)}
      className={`${styles.comment} ${commented ? styles.success : ""}`}
      data-count={formatNumberWithAbbreviation(totalComments)}
    >
      <Image src={commentIcon} alt="comment icon" />
    </button>
  );
}

export default CommentBtn;
