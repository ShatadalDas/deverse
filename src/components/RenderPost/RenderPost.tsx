import styles from "./RenderPost.module.scss";
import Image from "next/image";
import { CodeHighlighter } from "@/components";
import inspectIcon from "@/assets/inspect-icon.png";
import {
  UpvoteDownVoteWrapper,
  CommentBtn,
  RepostBtn,
  ShareBtn,
  CopyBtn,
} from "@/components/PostActionButtons";
import Link from "next/link";

type NormalPost = {
  postType: "normal";
  username: string;
  name: string;
  profilePic: string;
};

type AuthorsProfilePost = {
  postType: "author";
};

type NotAuthorsProfilePost = {
  postType: "not-author";
};

type ProfileSectionPost = (AuthorsProfilePost | NotAuthorsProfilePost) & {
  edited?: boolean;
  reposted?: {
    from: string;
  };
};

type Props = (NormalPost | ProfileSectionPost) & {
  time: string;
  date: string;
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
    <li className={`${styles.renderPost} ${props.postType === "normal" ? styles.normalPost : ""}`}>
      {props.postType === "normal" ? (
        <NormalPostInfoUI
          profilePic={props.profilePic}
          name={props.name}
          time={props.time}
          date={props.date}
          username={props.username}
        />
      ) : (
        <AlternateInfoUI
          date={props.date}
          time={props.time}
          isEdited={props.edited}
          reposted={props.reposted}
        />
      )}

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

/*
 * Local Components
 */

function NormalPostInfoUI({
  profilePic,
  username,
  name,
  time,
  date,
}: Pick<NormalPost, "username" | "profilePic" | "name"> & Pick<Props, "time" | "date">) {
  return (
    <div className={styles.normalPostInfoUIWrapper}>
      <Image
        src={profilePic || "/user.png"}
        width={512}
        height={512}
        alt="default profile logo"
        className={styles.userPic}
      />

      <div className={styles.info}>
        <div className={styles.nameWrapper}>
          <p className={styles.name}>{name}</p>
          <button>
            <Image
              src={inspectIcon}
              alt="inspect icon"
              className={styles.inspectIcon}
            />
          </button>
        </div>
        <p className={styles.time}>
          {username} | {time} | {date}
        </p>
      </div>
    </div>
  );
}

function AlternateInfoUI(
  props: Pick<Props, "time" | "date"> & {
    isEdited?: boolean;
    reposted?: {
      from: string;
    };
  }
) {
  return (
    <div className={styles.alternatePostInfoUIWrapper}>
      <p className={styles.timeAndDate}>
        <span>{props.time}</span>
        <span>|</span>
        <span>{props.date}</span>
      </p>

      {props.reposted && (
          <Link href={"/" + props.reposted.from} className={styles.extraInfo}>
            <span>Author:</span>
            <span>{props.reposted.from}</span>
          </Link>
      )}

      {props.isEdited && (
        <p className={styles.extraInfo}>
          <span>edited</span>
        </p>
      )}
    </div>
  );
}
