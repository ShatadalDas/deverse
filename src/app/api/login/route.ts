import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import conn from "../db/conn";
import UserModel from "../db/models/UserModel";
import json from "../utils/json";
import cryptrObj from "../utils/cryptrObj";
import { LoginUserSchema as RequestBodySchema } from "@/utils/zodSchema";


export async function POST(req: NextRequest) {
  try {
    const requestBodyJson = await req.json();

    const isValid = RequestBodySchema.safeParse(requestBodyJson).success;

    if (!isValid) {
      return json({
        error: "Invalid Request Body",
        status: 400,
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

    const user = await UserModel.findOne({ email: parsedReqBody.email });

    if (!user) {
      return json({
        body: undefined,
        error: "Invalid Email",
        status: 400,
      });
    }

    const storedPassword = user["password"];
    const decrptedPassword = cryptrObj.decrypt(storedPassword);

    if (parsedReqBody.password !== decrptedPassword) {
      return json({
        body: undefined,
        error: "Wrong Password",
        status: 400,
      });
    }

    const signedJWT = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const response = json({
      body: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
      error: undefined,
      status: 200,
    });

    response.headers.set("auth", signedJWT);

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
