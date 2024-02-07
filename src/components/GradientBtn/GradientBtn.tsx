"use client";
import styles from "./GradientBtn.module.scss";

type Props = {
  text: string;
  className?: string;
};

function GradientBtn({ text, className }: Props) {
  return (
    <button type="submit" className={`${className} ${styles.btn}`}>
      {text}
    </button>
  );
}

export default GradientBtn;
