import PostModel from "../db/models/PostModel";

async function incrementDownvote(postID: string) {
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      postID,
      { $inc: { downvotes: -1 } },
      { new: true }
    );
    return updatedPost.downvotes;
  } catch (err: any) {
    console.log(err.message);
    throw new Error("cannot increment downvote");
  }
}

export default incrementDownvote;
