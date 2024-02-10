"use client";

import { GradientBtn, MarkdownRenderer } from "@/components";
import { useWindowSize } from "@uidotdev/usehooks";
import { KeyboardEvent, useState } from "react";

type Props = {
  styles: {
    readonly [x: string]: string;
  };
};

//* Styles are handled from parent's page.module.scss file

function FormWrapper({ styles }: Props) {
  const [des, setDes] = useState("");
  const { width: windowWidth } = useWindowSize();

  function handleKeyPress(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.shiftKey && e.key === "Tab") {
      e.preventDefault();
      setDes((state) => state + "   ");
    }
  }

  return (
    <>
      <section className={styles.left}>
        <div className={styles.descriptionWrapper}>
          <label htmlFor="doubt-description">Description</label>
          <textarea
            id="doubt-description"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            placeholder="write the doubt in markdown(md) language"
            onKeyDown={handleKeyPress}
          />
        </div>

        <div className={styles.metaDescriptionWrapper}>
          <label htmlFor="doubt-meta-description">Meta Description</label>
          <textarea
            id="doubt-meta-description"
            placeholder="eg: Lorem ipsum dolor sit amet consectetur. Leo integer mattis convallis enim tincidunt justo a tincidunt magna. Nulla nisl senectus est "
          />
        </div>

        <div className={styles.hashtagsWrapper}>
          <label htmlFor="doubt-hashtags">Hashtags</label>
          <div className={styles.hashtagAndButtonWrapper}>
            <textarea id="doubt-hashtags" placeholder="eg: #topic1 #topic2" />
            <GradientBtn className={styles.gradientBtn} text="Done" />
          </div>
        </div>
      </section>

      {windowWidth && windowWidth > 640 && (
        <section className={styles.right}>
          <p>Preview</p>
          <MarkdownRenderer text={des} />
        </section>
      )}
    </>
  );
}
export default FormWrapper;
