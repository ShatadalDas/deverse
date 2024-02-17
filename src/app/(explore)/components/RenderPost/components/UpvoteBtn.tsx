"use client";

import Image from "next/image";
import styles from "./UpvoteBtn.module.scss";
import upArrow from "@/assets/up-arrow.png";
import formatNumberAbbreviated from "@/utils/formatNumberAbbreviated";
import { Dispatch, SetStateAction } from "react";

type UpvoteBtnProps = {
  totalUpvotes: number;
  btnClicked: "" | "up" | "down";
  setBtnClicked: Dispatch<SetStateAction<"" | "up" | "down">>;
};

function UpvoteBtn({ totalUpvotes, btnClicked, setBtnClicked }: UpvoteBtnProps) {
  return (
    <button
      onClick={() => setBtnClicked((state) => state === "up" ? "" : "up")}
      className={`${styles.upvote} ${btnClicked === "up" ? styles.success : ""}`}
      data-count={formatNumberAbbreviated(totalUpvotes)}
    >
      <Image src={upArrow} alt="up vote icon" />
    </button>
  );
}

export default UpvoteBtn;
