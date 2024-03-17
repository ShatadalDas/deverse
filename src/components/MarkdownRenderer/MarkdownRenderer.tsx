import Markdown from "react-markdown";
import { CodeHighlighter } from "..";
import styles from "./MarkdownRenderer.module.scss";
import Image from "next/image";

type Props = {
  content: string;
  className?: string;
};

function MarkdownRenderer({ content, className }: Props) {
  return (
    <div className={className + " " + styles.markdownRenderer}>
      <Markdown
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <CodeHighlighter
                code={String(children).replace(/\n$/, "")}
                lang={match[1]}
                className={styles.codeBlock}
              />
            ) : (
              <code className={styles.inlineCode}>{children}</code>
            );
          },
          img(image) {
            return (
              <Image
                alt={image.alt || ""}
                src={image.src || ""}
                width={1000}
                height={600}
                layout="responsive"
                className={styles.img}
              />
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
export default MarkdownRenderer;
