import Image from "next/image";
import styles from "./ShareBtn.module.scss"
import shareIcon from "@/assets/share-icon.png";
import formatNumberAbbreviated from "@/utils/formatNumberAbbreviated";

type Props = {
  totalShares: number;
}

function ShareBtn({totalShares}: Props) {
  return (
    <button className={`${styles.share} ${styles.succes}`} data-count={formatNumberAbbreviated(totalShares)}>
      <Image src={shareIcon} alt="share icon" />
    </button>
  );
}
export default ShareBtn