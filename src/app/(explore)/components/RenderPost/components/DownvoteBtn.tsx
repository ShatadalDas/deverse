"use client";

import Image from "next/image";
import styles from "./DownvoteBtn.module.scss";
import downArrow from "@/assets/down-arrow.png";
import formatNumberAbbreviated from "@/utils/formatNumberAbbreviated";
import { Dispatch, SetStateAction } from "react";

type DownvoteBtnProps = {
  totalDownvotes: number;
  btnClicked: "" | "up" | "down";
  setBtnClicked: Dispatch<SetStateAction<"" | "up" | "down">>;
};
function DownvoteBtn({
  totalDownvotes,
  btnClicked,
  setBtnClicked,
}: DownvoteBtnProps) {
  return (
    <button
    onClick={() => setBtnClicked((state) => state === "down" ? "" : "down")}
    className={`${styles.downvote} ${
        btnClicked === "down" ? styles.success : ""
      }`}
      data-count={formatNumberAbbreviated(totalDownvotes)}
    >
      <Image src={downArrow} alt="down vote icon" />
    </button>
  );
}

export default DownvoteBtn;
