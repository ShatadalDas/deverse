import { Carousel, HashtagAside } from "@/components";
import RenderForum from "./components/RenderForum/RenderForum";
import styles from "./page.module.scss";

const forumDetails = {
  title: "Uber API scopes do not appear in the dashboard page",
  metaDescription:
    "Lorem ipsum dolor sit amet consectetur. Facilisis velit eros phasellus proin egestas consequat euismod curabitur. Pellentesque ullamcorper cras feugiat feugiat. Aenean convallis quis vitae lacus si",
  time: "09:30 PM",
  date: "1 Dec, 2023",
  author: "John Doe",
  userPic: "/user.png",
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

function Forum() {
  return (
    <main className={styles.forumContainer}>
      <Carousel hashtags={hashtags} />

      <ul className={styles.forumList}>
        <RenderForum {...forumDetails} />
        <RenderForum {...forumDetails} />
        <RenderForum {...forumDetails} />
        <RenderForum {...forumDetails} />
        <RenderForum {...forumDetails} />
        <RenderForum {...forumDetails} />
        <RenderForum {...forumDetails} />
        <RenderForum {...forumDetails} />
        <RenderForum {...forumDetails} />
      </ul>

      <HashtagAside hashtags={hashtags} />
    </main>
  );
}
export default Forum;
