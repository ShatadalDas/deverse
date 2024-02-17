import styles from "./RenderPost.module.scss";
import Image from "next/image";
import { CodeHighlighter } from "@/components";
import inspectIcon from "@/assets/inspect-icon.png";
import {
  UpvoteDownVoteWrapper,
  CommentBtn,
  ShareBtn,
  RepostBtn,
  CopyBtn,
} from "@/components/PostActionButtons";



type Props = {
  username: string;
  name: string;
  time: string;
  date: string;
  profilePic: string;
  description: string;
  code: string;
  lang: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  totalShares: number;
  totalReposts: number;
};

async function RenderPost(props: Props) {
  return (
    <li className={styles.renderPost}>
      <div className={styles.infoWrapper}>
        <Image
          src={props.profilePic || "/user.png"}
          width={512}
          height={512}
          alt="default profile logo"
          className={styles.userPic}
        />

        <div className={styles.info}>
          <div className={styles.nameWrapper}>
            <p className={styles.name}>John Doe</p>
            <button>
              <Image
                src={inspectIcon}
                alt="inspect icon"
                className={styles.inspectIcon}
              />
            </button>
          </div>

          <p className={styles.time}>
            {props.username} | {props.time} | {props.date}
          </p>
        </div>
      </div>

      <div className={styles.description}>{props.description.trim()}</div>

      <CodeHighlighter
        code={props.code}
        lang={props.lang}
        className={styles.codeBlock}
      />

      <div className={styles.actions}>
        <UpvoteDownVoteWrapper
          totalUpvotes={props.totalUpvotes}
          totalDownvotes={props.totalDownvotes}
        />

        <CommentBtn totalComments={props.totalComments} />

        <ShareBtn totalShares={props.totalShares} />

        <RepostBtn totalReposts={props.totalReposts} />

        <CopyBtn code={props.code} />
      </div>
    </li>
  );
}

export default RenderPost;
