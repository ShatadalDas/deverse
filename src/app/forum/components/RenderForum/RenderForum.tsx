import Image from "next/image";
import styles from "./RenderForum.module.scss";
import Link from "next/link";

type Props = {
  title: string;
  metaDescription: string;
  time: string;
  date: string;
  author: string;
  userPic: string;
};

function RenderForum({
  title,
  metaDescription,
  time,
  date,
  author,
  userPic,
}: Props) {
  return (
    <li className={styles.renderForum}>
      <Link href="#" className={styles.linkWrapper}>
        <h2>{title}</h2>
        <p>{metaDescription}</p>
      </Link>

      <div className={styles.timeAndUserWrapper}>
        <p className={styles.timeAndDate}>{time}&nbsp;&nbsp; | &nbsp;&nbsp;{date}</p>
        <div className={styles.userInfoWrapper}>
          <Image
            src={userPic}
            width={512}
            height={512}
            alt="default profile logo"
            className={styles.userPic}
          />
          <p>{author}</p>
        </div>
      </div>

    </li>
  );
}
export default RenderForum;
