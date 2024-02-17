"use client"

import Image from "next/image";
import styles from "./Comment.module.scss"
import formatNumberAbbreviated from "@/utils/formatNumberAbbreviated";
import commentIcon from "@/assets/comment-icon.png";
import { useState } from "react";

type CommentBtnProps = {
  totalComments: number;
};

function CommentBtn({ totalComments }: CommentBtnProps) {
const [commented, setCommented] = useState(false)
  return (
    <button onClick={() => setCommented((state) => !state)} className={`${styles.comment} ${commented ? styles.success : ""}`} data-count={formatNumberAbbreviated(totalComments)}>
      <Image src={commentIcon} alt="comment icon" />
    </button>
  );
}

export default CommentBtn