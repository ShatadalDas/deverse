import { GradientBtn } from "@/components";
import styles from "./page.module.scss";
import langArr from "@/utils/langArr";
import CodeTextArea from "./components/CodeTextArea";

function Post() {
  async function onSubmit() {
    "use server";

    console.log("Hello World");
  }

  return (
    <form action={onSubmit} className={styles.postForm}>
      <section className={styles.leftSection}>
        <div className={styles.descriptionWrapper}>
          <label htmlFor="post-description">Description</label>
          <textarea
            id="post-description"
            className={styles.descriptionTextArea}
            placeholder="eg: Lorem ipsum dolor sit amet consectetur. Habitasse blandit nisl vitae duis rhoncus eu. Tellus quam sit id vulputate vitae et sed tellus. Posuere natoque in integer orci velit. Egestas pharetra eu morbi massa ut eu nisl consectetur."
          />
        </div>
        <div className={styles.hashtagsWrapper}>
          <label htmlFor="hashtags-input">Hashtags</label>
          <textarea
            id="hashtags-input"
            className={styles.hashtagsTextArea}
            placeholder="eg: #topic1  #topic2  #topic3"
          />
        </div>
      </section>

      <section className={styles.rightSection}>
        <div className={styles.buttonWrapper}>
          <label htmlFor="select-language" className="sr-only">
            Select Language for the code
          </label>
          <select
            id="select-language"
            defaultValue={"python"}
            className={styles.dropDownMenu}
          >
            {langArr.map((lang) => (
              <option value={lang}>{lang}</option>
            ))}
          </select>
          <GradientBtn text="Done" className={styles.gradientBtn} />
        </div>
        <div className={styles.codeWrapper}>
          <label htmlFor="code-input">Code</label>
          <CodeTextArea styles={styles} />
        </div>
      </section>
    </form>
  );
}
export default Post;
