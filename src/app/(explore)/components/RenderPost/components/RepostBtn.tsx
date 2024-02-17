"use client";

import Image from "next/image";
import styles from "./RepostBtn.module.scss";
import repostIcon from "@/assets/repost-icon.png";
import formatNumberAbbreviated from "@/utils/formatNumberAbbreviated";
import { useState } from "react";

type Props = {
  totalReposts: number;
};

function RepostBtn({ totalReposts }: Props) {
  const [reposted, setReposted] = useState(false);

  return (
    <button
      onClick={() => setReposted(true)}
      className={`${styles.repost} ${reposted ? styles.success : ""}`}
      data-count={formatNumberAbbreviated(totalReposts)}
    >
      <Image src={repostIcon} alt="repost icon" />
    </button>
  );
}

export default RepostBtn;
