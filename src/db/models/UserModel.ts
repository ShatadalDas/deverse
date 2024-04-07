import { model, models, Schema } from "mongoose";

export type UserModelType = {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const schema = new Schema<UserModelType>(
  {
    userId: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.user || model("user", schema);
