import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import conn from "../db/conn";
import UserModel, { UserModelType } from "../db/models/UserModel";
import json from "../utils/json";
import cryptrObj from "../utils/cryptrObj";
import { SignUpUserSchema as RequestBodySchema } from "@/utils/zodSchema";

export async function POST(req: NextRequest) {
  try {
    const requestBodyJson = await req.json();

    const isValid = RequestBodySchema.safeParse(requestBodyJson).success;

    if (!isValid) {
      return json({
        error: "Invalid Request Body",
        status: 406,
      });
    }

    const parsedReqBody = RequestBodySchema.parse(requestBodyJson);

    const dbConnected = await conn();

    if (!dbConnected) {
      return json({
        error: "Unable to connect to database",
        status: 500,
      });
    }

    const countUserWithSameEmail = await UserModel.countDocuments({
      email: parsedReqBody.email,
    });

    if (countUserWithSameEmail > 0) {
      return json({
        error: "Email already exists",
        status: 422,
      });
    }

    const countUserWithSameUserId = await UserModel.countDocuments({
      userId: parsedReqBody.userId,
    });

    if (countUserWithSameUserId > 0) {
      return json({
        error: "UserId already taken",
        status: 422,
      });
    }

    const user = new UserModel<UserModelType>({
      ...parsedReqBody,
      userId: parsedReqBody.userId,
      password: cryptrObj.encrypt(parsedReqBody.password),
    });
    const savedUser = await user.save();

    if (savedUser) {
      console.log("user created with id: ", savedUser._id);

      const signedJWT = jwt.sign(
        { _id: savedUser._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

      const response = json({
        body: {
          _id: savedUser._id,
          firstname: savedUser.firstname,
          lastname: savedUser.lastname,
          email: savedUser.email,
          userId: savedUser.userId,
        },
        error: undefined,
        status: 201,
      });

      response.headers.set("auth", signedJWT);

      return response;
    }
  } catch (e: any) {
    console.log(e.message);

    return json({
      error: "Internal Server Error",
      status: 500,
    });
  }
}
