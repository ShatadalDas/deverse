"use client";

import { GradientBtn, RenderPost } from "@/components";
import styles from "./page.module.scss";
import { useSearchParams } from "next/navigation";
import NoPostId from "./NoPostId";

const code = `
async function Explore() {
  return (
    <main className={styles.explore}>
      <RenderPost />
    </main>
  ); 
}
export default Explore;
`;

const lang = "jsx";

const postDetails = {
  username: "@johndoe123",
  name: "John Doe",
  time: "09:30 PM",
  date: "1 Dec, 2023",
  profilePic: "",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, id debitis corrupti possimus rerum, molestias eligendi tempore harum impedit obcaecati aut dolorem quibusdam excepturi aspernatur nobis ipsam. Reiciendis recusandae accusamus molestias minima enim similique nostrum consequatur veritatis eligendi! Rerum nesciunt unde rem excepturi id facilis voluptatum fugit ipsum molestiae perferendis.",
  code,
  lang,
  totalUpvotes: 1500,
  totalDownvotes: 2300,
  totalComments: 500500,
  totalShares: 690,
  totalReposts: 7804,
};

function ViewPost() {
  const searchParams = useSearchParams();

  return !searchParams.get("id") ? (
    <NoPostId />
  ) : (
    <main className={styles.postViewWrapper}>
      <RenderPost postType="normal" {...postDetails} />

      <p className={styles.commentsTitle}>
        <span>Comments</span>
        <span>{`( ${120} )`}</span>
      </p>
      <form className={styles.textareaWrapper}>
        <label htmlFor="comment" className="sr-only">
          Comment
        </label>
        <textarea
          id="comment"
          placeholder="write your comment"
          name="comment"
          className={styles.commentTextarea}
        />
        <GradientBtn text="Done" className={styles.gradientBtn} />
      </form>

      <ul></ul>
    </main>
  );
}
export default ViewPost;
