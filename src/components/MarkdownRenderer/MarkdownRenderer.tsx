import Markdown from "react-markdown";
import { CodeHighlighter } from "..";
import styles from "./MarkdownRenderer.module.scss";

type Props = {
  text: string;
  className?: string;
};

function MarkdownRenderer({ text, className }: Props) {
  return (
    <div className={className}>
      <Markdown
        children={text}
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <CodeHighlighter
                code={String(children).replace(/\n$/, "")}
                lang={match[1]}
              />
            ) : (
              <code className={styles.inlineCode}>{children}</code>
            );
          },
        }}
      />
    </div>
  );
}
export default MarkdownRenderer;
