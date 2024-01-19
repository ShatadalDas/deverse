import { connect } from "mongoose";
import env from "../../../env";

async function conn() {
  try {
    console.log(env.MONGO_URI)
    await connect(env.MONGO_URI);
    console.log("MongoDB Connected...!")
  } catch (e: any) {
    console.log(e.message);
  }
}

export default conn;
