import { LanguagesAllowed } from "@/components/CodeHighlighter/CodeHighlighter";
import conn from "../db/conn";
import PostModel from "../db/models/PostModel";

type Req = {
  userid: string;
  des: string;
  code: string;
  lang: LanguagesAllowed;
};

async function createPost(req: Req) {
  await conn();
  const res = await PostModel.create({
    userid: req.userid,
    description: req.des,
    code: req.code,
    lang: req.lang,
  })
  
  if(res) {
    return {
      status: 201,
      data: {...res}
    }
  } else {
    return {
      status: 500,
      data: {}
    }
  }
}
export default createPost