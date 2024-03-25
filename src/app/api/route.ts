import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import conn from "./db/conn";
import UserModel from "./db/models/UserModel";
import json from "./utils/json";

export async function GET(req: NextRequest) {
  try {
    const authToken = req.headers.get("authorization")?.split(" ")[1];

    if (!authToken) {
      return json({
        body: undefined,
        error: "Auth Token Not Provided",
        status: 400,
      });
    }

    let _id: string;

    try {
      const jwtObj = jwt.verify(
        authToken,
        process.env.JWT_SECRET
      ) as JwtPayload;

      _id = jwtObj["_id"];
    } catch (e: any) {
      console.log(e.message);

      return json({
        body: undefined,
        error: "Invalid Auth Token",
        status: 400,
      });
    }

    const dbConnected = await conn();

    if (!dbConnected) {
      return json({
        body: undefined,
        error: "Unable to connect to database",
        status: 500,
      });
    }

    const user = await UserModel.findById(_id);

    if (!user) {
      return json({
        body: undefined,
        error: "User not found",
        status: 400,
      });
    }


    return json({
      body: {
        firstname: user["firstname"],
        lastname: user["lastname"],
        email: user["email"],
        userId: user["userId"],
      },
      error: undefined,
      status: 200,
    });
  } catch (e: any) {
    console.log(e.message);

    return json({
      body: undefined,
      error: "Internal Server Error",
      status: 500,
    });
  }
}
