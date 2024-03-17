import styles from "./page.module.scss";
import { LanguagesAllowed } from "@/components/CodeHighlighter/CodeHighlighter";
import { HashtagAside, Carousel, RenderPost, Share } from "@/components";

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
  "python1",
  "typescript1",
  "react1",
  "cpp1",
  "python2",
  "typescript12",
  "react12",
  "cpp1",
];

type Props = {
  searchParams?: {
    share?: string;
  };
};

async function Explore({ searchParams }: Props) {
  return (
    <main className={styles.explore}>
      {searchParams?.share && <Share postId={searchParams.share} />}
      <Carousel hashtags={hashtags} />

      <ul className={styles.postsWrapper}>
        <RenderPost postType="normal" {...postDetails} />
        <RenderPost postType="normal" {...postDetails} />
        <RenderPost postType="normal" {...postDetails} />
        <RenderPost postType="normal" {...postDetails} />
        <RenderPost postType="normal" {...postDetails} />
        <RenderPost postType="normal" {...postDetails} />
        <RenderPost postType="normal" {...postDetails} />
      </ul>

      <HashtagAside hashtags={hashtags} />
    </main>
  );
}

export default Explore;
