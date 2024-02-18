import { RenderPost } from "@/components";
import styles from "./page.module.scss";
import { LanguagesAllowed } from "@/components/CodeHighlighter/CodeHighlighter";

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
  time: "09:30 PM",
  date: "1 Dec, 2023",
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

function Profile() {
  return (
    <div>
      <RenderPost
        postType="author"
        reposted={{
          from: "@andreapiacquadio",
        }}
        edited
        {...postDetails}
      />
    </div>
  );
}
export default Profile;
