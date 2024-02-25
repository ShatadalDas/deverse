import { connect } from "mongoose";

async function conn() {
  try {
    await connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...!");
  } catch (e: any) {
    console.log(e.message);
  }
}

export default conn;
