import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import conn from "@/db/conn";
import { UserModel } from "@/db/models";
import json from "@/utils/json";
import cryptrObj from "@/utils/cryptrObj";
import { LoginUserSchema as RequestBodySchema } from "@/utils/zodSchema";
import bcryptjs from "bcryptjs";

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

    let user;

    if (parsedReqBody.email) {
      user = await UserModel.findOne({ email: parsedReqBody.email });
    }

    if (parsedReqBody.email && !user) {
      return json({
        body: undefined,
        error: "Invalid Email",
        status: 400,
      });
    }
    if (parsedReqBody.userId) {
      user = await UserModel.findOne({ userId: parsedReqBody.userId });
    }

    if (parsedReqBody.userId && !user) {
      return json({
        body: undefined,
        error: "Invalid userId",
        status: 400,
      });
    }

    let storedPasswordHash = user["password"];

    if (bcryptjs.compareSync(parsedReqBody.password, storedPasswordHash)) {
      return json({
        body: undefined,
        error: "Wrong Password",
        status: 401,
      });
    }

    const encodedCookie = cryptrObj.encrypt(
      JSON.stringify({
        _id: user._id,
      })
    );

    const response = json({
      body: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        userId: user.userId,
      },
      error: undefined,
      status: 200,
    });

    response.cookies.set("auth", encodedCookie, {
      httpOnly: true,
      secure: true,
      expires: Date.now() + 60 * 24 * 3600000, //60 days
    });

    return response;
  } catch (e: any) {
    console.log(e.message);
    return json({
      body: undefined,
      error: "Internal Server Error",
      status: 500,
    });
  }
}
