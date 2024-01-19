import { cleanEnv, str } from "envalid";

export default cleanEnv(process.env, {
  MONGO_URI: str(),
});
