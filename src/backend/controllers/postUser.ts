import { z } from "zod";
import { UserSchema } from "../../utils/zodSchema";
import conn from "../mongodb/conn";
import UserModel from "../mongodb/models/UserModel";
import { disconnect } from "mongoose";

const postUserArgSchema = UserSchema;

type PostUserArgType = z.infer<typeof postUserArgSchema>;

export default async function postUser(arg: PostUserArgType) {
  if (!postUserArgSchema.safeParse(arg).success) {
    throw new Error("Invalid ID");
  }
  // try {
  await conn();
  const user = await UserModel.create({
    ...arg,
  });
  const savedUser = await user.save();
  return {
    _id: savedUser._id,
    firstName: savedUser.firstName,
    lastName: savedUser.lastName,
    email: savedUser.email,
    password: savedUser.password,
  };
  // } catch (e: any) {
  //   throw new Error("Error while posting the user");
  // } finally {
  //   disconnect();
  //   console.log("MongoDB disconnected...!");
  // }
}
