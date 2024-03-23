"use client";

import { GradientBtn } from "@/components";
import { useRouter } from "next/navigation";

type Props = {
  className: string;
};

function ButtonWrapper({ className }: Props) {
  const router = useRouter();

  return (
    <GradientBtn
      className={className}
      text="Back"
      onClick={(e) => {
        router.back();
      }}
    />
  );
}
export default ButtonWrapper;
