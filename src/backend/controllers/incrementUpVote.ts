import PostModel from "../db/models/PostModel";

async function incrementUpvote(postID: string) {
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      postID,
      { $inc: { upvotes: 1 } },
      { new: true }
    );
    return updatedPost.upvotes;
  } catch (err: any) {
    console.log(err.message);
    throw new Error("Cannot increment upvote");
  }
}

export default incrementUpvote;
