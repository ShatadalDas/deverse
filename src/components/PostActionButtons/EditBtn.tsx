"use client";

import Image from "next/image";
import styles from "./EditBtn.module.scss";
import editIcon from "@/assets/edit-icon-white.svg";

function EditBtn() {
  return (
    <button data-text="edit" className={styles.editBtn}>
      <Image src={editIcon} alt="" />      
    </button>
  );
}
export default EditBtn;
