"use client";
import Image from "next/image";
import crossIcon from "@/assets/cross-close-icon.svg";
import styles from "./Toast.module.scss";
import { useToast } from "@/hooks";

type Props = {
  isVisible: boolean;
  statusCode: number;
  message: string;
  type: "success" | "error";
};

function Toast({ isVisible, message, statusCode, type }: Props) {
  const toast = useToast();

  return (
    <div
      className={`${styles.toastWrapper} ${isVisible && styles.toastOpen} ${
        !isVisible && styles.toastClose
      } ${type === "success" && styles.toastSuccess} `}
    >
      <p className={styles.statusCode}>{statusCode}</p>
      <p className={styles.message}>{message}</p>
      <button className={styles.closeBtn} onClick={toast?.hide}>
        <Image src={crossIcon} alt="" />
      </button>
    </div>
  );
}
export default Toast;
