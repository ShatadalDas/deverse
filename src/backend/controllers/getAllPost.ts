import PostModel from "../db/models/PostModel";

async function getAllPost(userID: string, quantity: number) {
  try {
    const posts = await PostModel.find({ userID }).limit(quantity);
    return posts;
  } catch (err: any) {
    console.log(err.message);
    throw new Error("Error fetching ");
  }
}

export default getAllPost;
