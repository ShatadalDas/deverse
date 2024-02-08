import Image from "next/image";
import styles from "./HashtagAside.module.scss";
import searchIcon from "@/assets/search-icon.png";

type Props = {
  hashtags: string[]
}

function HashtagAside({hashtags}: Props) {
  return (
    <aside className={styles.hashtagsWrapper}>
    {/* <form className={styles.searchWrapper}>
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
    </form> */}

    <h2 className={styles.hashtagTitle}>&#x23;hashtags</h2>

    <ul className={styles.hashtags}>
      {hashtags.sort().filter((item, pos, ary) => (!pos || item != ary[pos - 1])).map((hashtag, i) => (
        <li className={styles.tag} key={i}>
          &#x23;{hashtag}
        </li>
      ))}
    </ul>
  </aside>
  )
}
export default HashtagAside