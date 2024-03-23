"use client";
import { MouseEvent, RefObject } from "react";
import styles from "./GradientBtn.module.scss";

type Props = {
  text: string;
  className?: string;
  disabled?: boolean;
  ref?: RefObject<HTMLButtonElement>;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

function GradientBtn({ text, className, disabled, ref, onClick }: Props) {
  return (
    <button onClick={onClick} type="submit" className={`${className} ${styles.btn}`} disabled={disabled} ref={ref}>
      {text}
    </button>
  );
}

export default GradientBtn;
