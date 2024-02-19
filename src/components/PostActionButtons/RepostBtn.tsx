"use client";

import Image from "next/image";
import styles from "./RepostBtn.module.scss";
import repostIcon from "@/assets/repost-icon.png";
import formatNumberWithAbbreviation from "@/utils/formatNumberWithAbbreviation";
import { useState } from "react";

type Props = {
  totalReposts: number;
  disabled?: boolean;
};

function RepostBtn({ totalReposts, disabled = false }: Props) {
  const [reposted, setReposted] = useState(false);

  return (
    <button
      onClick={() => setReposted(true)}
      className={`${styles.repost} ${reposted ? styles.success : ""}`}
      data-count={formatNumberWithAbbreviation(totalReposts)}
      aria-disabled={disabled}
      disabled={disabled}
    >
      <Image src={repostIcon} alt="repost icon" />
    </button>
  );
}

export default RepostBtn;
