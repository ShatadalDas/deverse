import RenderPost from "./components/RenderPost/RenderPost";
import styles from "./page.module.scss";
import { LanguagesAllowed } from "@/components/CodeHighlighter/CodeHighlighter";
import Carousel from "./components/Carousel/Carousel";
import { Suspense } from "react";
import { PostSkeletonLoader } from "@/components";
import HashtagAside from "./components/HashtagAside/HashtagAside";

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

const lang: LanguagesAllowed = "jsx";

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

const hashtags = [
  "python",
  "typescript",
  "react",
  "cpp",
  "python",
  "typescript",
  "react",
  "cpp",
  "python",
  "typescript",
  "react",
  "cpp",
  "python",
  "typescript",
  "react",
  "cpp",
];

async function Explore() {
  return (
    <section className={styles.explore}>
      <Carousel hashtags={hashtags} />

      <main className={styles.postsWrapper}>
        <RenderPost {...postDetails} />
        <RenderPost {...postDetails} />
        <RenderPost {...postDetails} />
        <RenderPost {...postDetails} />
        <RenderPost {...postDetails} />
        <RenderPost {...postDetails} />
        <RenderPost {...postDetails} />
        <RenderPost {...postDetails} />
      </main>

      <HashtagAside hashtags={hashtags} />
    </section>
  );
}

export default Explore;
