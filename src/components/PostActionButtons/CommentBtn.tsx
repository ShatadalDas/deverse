"use client";

import Image from "next/image";
import styles from "./CommentBtn.module.scss";
import formatNumberWithAbbreviation from "@/utils/formatNumberWithAbbreviation";
import commentIcon from "@/assets/comment-icon.png";
import { useState } from "react";
import Link from "next/link";

type CommentBtnProps = {
  totalComments: number;
};

function CommentBtn({ totalComments }: CommentBtnProps) {
  const [commented, setCommented] = useState(false);
  return (
    <Link href="/view/post?id=1273612">
      <button
        onClick={() => setCommented((state) => !state)}
        className={`${styles.commentBtn} ${commented ? styles.success : ""}`}
        data-count={formatNumberWithAbbreviation(totalComments)}
      >
        <Image src={commentIcon} alt="comment icon" />
      </button>
    </Link>
  );
}

export default CommentBtn;
