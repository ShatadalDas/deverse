import styles from "./Share.module.scss";
import crossIcon from "@/assets/cross-icon.svg";
import twitterIcon from "@/assets/twitter-icon.svg";
import linkedinIcon from "@/assets/linkedin-icon-2.svg";
import whatsappIcon from "@/assets/whatsapp-icon.svg";
import facebookIcon from "@/assets/facebook-icon.svg";
import redditIcon from "@/assets/reddit-icon.svg";
import mailIcon from "@/assets/mail-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { GradientBtn } from "@/components";

type Props = {
  postId: string;
};

//? https://www.reddit.com/submit?url=https://stackoverflow.com/questions/24823114/post-to-reddit-via-url&title=Post%20to%20Reddit%20via%20URL

const baseUrl = process.env.DOMAIN;

function Share({ postId }: Props) {
  return (
    <div className={styles.container}>
      <section className={styles.shareWrapper}>
        <div className={styles.shareCloseWrapper}>
          <p>Share</p>
          <Link href={"/"}>
            <button>
              <Image src={crossIcon} alt="" />
            </button>
          </Link>
        </div>
        
        <main className={styles.main}>
          <div className={styles.socials}>
            <Link href={"/"}>
              <button>
                <Image src={twitterIcon} alt="" />
              </button>
            </Link>
            <Link href={"/"}>
              <button>
                <Image src={whatsappIcon} alt="" />
              </button>
            </Link>
            <Link href={"/"}>
              <button>
                <Image src={facebookIcon} alt="" />
              </button>
            </Link>
            <Link href={"/"}>
              <button>
                <Image src={linkedinIcon} alt="" />
              </button>
            </Link>
            <Link href={"/"}>
              <button>
                <Image src={mailIcon} alt="" />
              </button>
            </Link>
            <Link href={"/"}>
              <button>
                <Image src={redditIcon} alt="" />
              </button>
            </Link>
          </div>

          <div className={styles.urlWrapper}>
            <p className={styles.url}>{baseUrl + "/view/post?id=" + postId}</p>
            <GradientBtn text="Copy" />
          </div>
        </main>
      </section>
    </div>
  );
}
export default Share;
