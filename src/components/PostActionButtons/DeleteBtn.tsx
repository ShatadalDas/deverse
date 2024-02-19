"use client"

import Image from "next/image";
import styles from "./DeleteBtn.module.scss";
import deleteIcon from "@/assets/delete-icon.svg"

function DeleteBtn() {
  return (
    <button data-text="delete" className={styles.deleteBtn}>
      <Image src={deleteIcon} alt="" />
    </button>
  )
}
export default DeleteBtn