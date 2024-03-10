"use client";

import { GradientBtn } from "@/components";
import styles from "./page.module.scss";
import langArr from "@/utils/langArr";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUniqueId } from "@/hooks";
import { Editor } from "@monaco-editor/react";

function Post() {
  const router = useRouter();
  const [languageSelected, setLanguageSelected] = useState("python");
  const [codeStr, setCodeStr] = useState<string>();
  const uniqueId = useUniqueId();

  useEffect(() => {
    router.push("/post?lang=" + languageSelected);
  }, [languageSelected]);

  return (
    <form className={styles.postForm}>
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
            value={languageSelected}
            className={styles.dropDownMenu}
            onChange={(e) => setLanguageSelected(e.target.value)}
          >
            {langArr.map((lang) => (
              <option value={lang} key={uniqueId()}>
                {lang}
              </option>
            ))}
          </select>
          <GradientBtn text="Done" className={styles.gradientBtn} />
        </div>
        <div className={styles.codeWrapper}>
          <label htmlFor="code-input">Code</label>
          <textarea id="code-input" className="sr-only" value={codeStr} />
          <div aria-hidden>
            <Editor
              language="python"
              theme="vs-dark"
              className={styles.codeEditor}
              value={codeStr}
              onChange={(e) => setCodeStr(e)}
            />
          </div>
        </div>
      </section>
    </form>
  );
}
export default Post;
