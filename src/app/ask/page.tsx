"use client";

import { GradientBtn, MarkdownRenderer } from "@/components";
import { useWindowSize } from "@uidotdev/usehooks";
import { KeyboardEvent, useState } from "react";
import styles from "./page.module.scss";
import { useDefinedLocalStorage } from "@/hooks";

function Ask() {
  const [des, setDes] = useState("");
  const [metaDes, setMetaDes] = useState("");
  const [topics, setTopics] = useState("");
  const { width: windowWidth } = useWindowSize();
  const { defined } = useDefinedLocalStorage(() => {
    setDes(localStorage.getItem("des") || "");
    setMetaDes(localStorage.getItem("metaDes") || "");
    setTopics(localStorage.getItem("topics") || "");
  });

  function handleKeyPress(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.shiftKey && e.key === "Tab") {
      e.preventDefault();
      setDes((state) => state + "   ");
    }
  }

  return (
    <>
      <main className={styles.textareaSection}>
        <div className={styles.descriptionWrapper}>
          <label htmlFor="doubt-description">Description</label>
          <textarea
            disabled={!defined}
            id="doubt-description"
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
              localStorage.setItem("des", e.target.value);
            }}
            placeholder="use markdown(md) language and `shift + tab` for tab spacing"
            onKeyDown={handleKeyPress}
          />
        </div>

        <div className={styles.metaDescriptionWrapper}>
          <label htmlFor="doubt-meta-description">Meta Description</label>
          <textarea
            disabled={!defined}
            id="doubt-meta-description"
            placeholder="eg: Lorem ipsum dolor sit amet consectetur. Leo integer mattis convallis enim tincidunt justo a tincidunt magna. Nulla nisl senectus est "
            value={metaDes}
            onChange={(e) => {
              setMetaDes(e.target.value);
              localStorage.setItem("metaDes", e.target.value);
            }}
          />
        </div>

        <div className={styles.hashtagsWrapper}>
          <label htmlFor="doubt-hashtags">Hashtags</label>
          <div className={styles.hashtagAndButtonWrapper}>
            <textarea
              disabled={!defined}
              id="doubt-hashtags"
              placeholder="eg: #topic1 #topic2"
              value={topics}
              onChange={(e) => {
                setTopics(e.target.value);
                localStorage.setItem("topics", e.target.value);
              }}
            />
            <GradientBtn className={styles.gradientBtn} text="Done" />
          </div>
        </div>
      </main>

      {windowWidth && windowWidth > 640 && (
        <aside className={styles.markdownSection}>
          <p>Preview</p>
          <MarkdownRenderer text={des} />
        </aside>
      )}
    </>
  );
}

export default Ask;
