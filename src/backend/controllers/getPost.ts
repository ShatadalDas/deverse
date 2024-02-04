import conn from "../db/conn";
import PostModel from "../db/models/PostModel";

async function getPost(postID: string) {
  await conn();
  const postRes = await PostModel.findById(postID);
  return postRes;
}

export default getPost