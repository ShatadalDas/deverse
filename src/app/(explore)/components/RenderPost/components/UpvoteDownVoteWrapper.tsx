"use client";

import { useState } from "react";
import DownvoteBtn from "./DownvoteBtn";
import UpvoteBtn from "./UpvoteBtn";

type Props = {
  totalUpvotes: number;
  totalDownvotes: number;
};

function UpvoteDownVoteWrapper({ totalUpvotes, totalDownvotes }: Props) {
  const [btnClicked, setBtnClicked] = useState<"up" | "down" | "">("");

  return (
    <>
      <UpvoteBtn
        totalUpvotes={totalUpvotes}
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
      />
      <DownvoteBtn
        totalDownvotes={totalDownvotes}
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
      />
    </>
  );
}
export default UpvoteDownVoteWrapper;
