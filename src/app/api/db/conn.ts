import { connect, connection } from "mongoose";

const dbName =
  process.env.NODE_ENV === "production" ? "deverse" : process.env.NODE_ENV;

async function conn() {
  try {
    if (connection.readyState === 1) {
      console.log("MongoDB Already Connected...!");
    } else {
      await connect(process.env.MONGO_URI + dbName);
      console.log("MongoDB Connected...!");
    }
    return true;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
}

export default conn;
