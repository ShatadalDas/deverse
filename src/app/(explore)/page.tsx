import Image from "next/image";
import RenderPost from "./components/RenderPost/RenderPost";
import styles from "./page.module.scss";
import searchIcon from "@/assets/search-icon.png";
import { LanguagesAllowed } from "@/components/CodeHighlighter/CodeHighlighter";
import Carousel from "./components/Carousel/Carousel";
import { Suspense } from "react";
import { PostSkeletonLoader } from "@/components";

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

      <aside className={styles.hashtagsWrapper}>
        <form className={styles.searchWrapper}>
          <Image
            src={searchIcon}
            alt="search icon"
            className={styles.searchIcon}
            aria-hidden
          />
          <label htmlFor="search" className="sr-only">
            Search People
          </label>
          <input
            type="search"
            placeholder="search"
            className={styles.searchInput}
            id="search"
          />
        </form>

        <h2 className={styles.hashtagTitle}>&#x23;hashtags</h2>

        <ul className={styles.hashtags}>
          {hashtags.sort().map((hashtag, i) => (
            <li className={styles.tag} key={i}>
              &#x23;{hashtag}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

export default Explore;
