import styles from "./page.module.scss";
import shareIcon from "@/assets/share-icon.png";
import Image from "next/image";
import { GradientBtn, MarkdownRenderer } from "@/components";
import { UpvoteDownVoteWrapper } from "@/components/PostActionButtons";
import fs from "fs";
import Link from "next/link";

type Params = {
  params: { forumId: string };
};

const pageContent = {
  title: "Uber API scopes do not appear in the dashboard page",
  date: "2 Dec, 2023",
  time: "09:30 AM",
  content: fs.readFileSync("src/app/forum/[forumId]/demo.md").toString(),
  author: "John Doe",
};

function ForumView({ params }: Params) {
  console.log(params.forumId);
  return (
    <main className={styles.formViewWrapper}>
      <h2 className={styles.title}>{pageContent.title}</h2>
      <div className={styles.extraInfo}>
        <p className={styles.timeAndDate}>
          {pageContent.time + "  |  " + pageContent.date}
        </p>
        <div className={styles.authorWrapper}>
          <Image
            className={styles.authorPic}
            src={"/user.png"}
            alt=""
            height={512}
            width={512}
          />
          <span className={styles.authorName}>{pageContent.author}</span>
        </div>

        <Link href={"/"}>
          <Image src={shareIcon} alt="" className={styles.shareIcon} />
        </Link>
      </div>
      <article className={styles.article}>
        <MarkdownRenderer
          content={pageContent.content}
          className={styles.markdownWrapper}
        />
      </article>
      <div className={styles.actionBtnWrapper}>
        <UpvoteDownVoteWrapper totalUpvotes={1579} totalDownvotes={2134} />
      </div>

      <section className={styles.answerSection}>
        <div className={styles.answersTitleWrapper}>
          <p>Answers</p>
          <p>{`( ${102} )`}</p>
        </div>
        <form className={styles.answerForm}>
          <label htmlFor="answer" className="sr-only">
            Write your answer
          </label>
          <textarea
            name="answer"
            id="answer"
            className={styles.answerTextarea}
            placeholder="write your answer in markdown (md) language"
          />
          <GradientBtn text="Done" className={styles.doneBtn} />
        </form>
      </section>
    </main>
  );
}

export default ForumView;
