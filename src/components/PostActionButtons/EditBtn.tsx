"use client";

import Image from "next/image";
import styles from "./EditBtn.module.scss";
import editIcon from "@/assets/edit-icon-white.svg";
import { useState } from "react";

type Props = {
  date: string;
  time: string;
};

function EditBtn({ date, time }: Props) {
  const [editable, setEditable] = useState(true);

  function checkTime() {
    console.log(date);
    console.log(time);

    const postDate = new Date(date + " " + time);
    const currDate = new Date();

    const diffMS = currDate.getTime() - postDate.getTime();
    const hours = Math.floor(diffMS / (1000 * 60 * 60));
    console.log(hours);

    if (hours >= 24) setEditable(false);
  }

  return (
    <button
      data-text="edit"
      className={styles.editBtn}
      onClick={checkTime}
      disabled={editable}
    >
      <Image src={editIcon} alt="" />
    </button>
  );
}
export default EditBtn;
