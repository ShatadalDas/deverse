import Image from "next/image";
import styles from "./LogoBg.module.scss";

function LogoBg() {
  return (
    <div aria-hidden className={styles.bgWrapper}>
      <Image
        aria-hidden
        className={styles.img1}
        src={"/logo.webp"}
        alt=""
        height={200}
        width={180}
      />
      <Image
        aria-hidden
        className={styles.img2}
        src={"/logo.webp"}
        alt=""
        height={200}
        width={180}
      />
      <Image
        aria-hidden
        className={styles.img3}
        src={"/logo.webp"}
        alt=""
        height={200}
        width={180}
      />
    </div>
  );
}
export default LogoBg;
