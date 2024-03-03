import Image from "next/image";
import styles from "./ShareBtn.module.scss";
import shareIcon from "@/assets/share-icon.png";
import formatNumberWithAbbreviation from "@/utils/formatNumberWithAbbreviation";
import Link from "next/link";

type Props = {
  totalShares: number;
};

function ShareBtn({ totalShares }: Props) {
  return (
    <Link href={"?share=123456"}>
      <button
        className={`${styles.share} ${styles.succes}`}
        data-count={formatNumberWithAbbreviation(totalShares)}
      >
        <Image src={shareIcon} alt="share icon" />
      </button>
    </Link>
  );
}
export default ShareBtn;
