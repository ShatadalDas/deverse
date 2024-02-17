//? Originally only `postId` will be passed as props

import { CodeHighlighter } from "@/components";

type Props = {
  time: string;
  date: string;
  description: string;
  ownerId?: `@${string}`;
  code: string;
  lang: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  totalReposts: number;
  edited?: boolean;
};

function RenderPost({
  time,
  date,
  description,
  ownerId,
  code,
  lang,
  totalUpvotes,
  totalDownvotes,
  totalComments,
  totalReposts,
  edited,
}: Props) {
  return (
    <section>
      <div>
        <p>
          {time} | {date}
        </p>
        {ownerId ? <div>Author: {ownerId}</div> : ""}
        {edited ? <div>edited</div> : ""}
      </div>

      <p>{description}</p>
      <CodeHighlighter code={code} lang={lang} />
      <div>
        
      </div>
    </section>
  );
}
export default RenderPost;
