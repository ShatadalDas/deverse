import { model, models, Schema } from "mongoose";

// type Res = {
//   username: string;
//   name: string;
//   time: string;
//   date: string;
//   profilePic: string;
//   des: string;
//   code: string;
//   lang: LanguagesAllowed;
//   totalUpvotes: number;
//   totalDownvotes: number;
//   totalComments: number;
//   totalShares: number;
//   totalReposts: number;
// };

const schema = new Schema(
  {
    userid: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    code: {
      type: String,
      trim: true,
      required: true,
    },
    lang: {
      type: String,
      trim: true,
      required: true,
    },
    totalUpvotes: {
      type: Number,
      default: 0,
    },
    totalDownvotes: {
      type: Number,
      default: 0,
    },
    totalComments: {
      type: Number,
      default: 0,
    },
    totalShares: {
      type: Number,
      default: 0,
    },
    totalReposts: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default models.post || model("post", schema);
