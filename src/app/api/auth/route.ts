import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import json from "../utils/json";
import UserModel from "../db/models/UserModel";
import conn from "../db/conn";

export async function GET(req: NextRequest) {
  try {
    const authToken = req.headers.get("Authorization")?.split(" ")[1];

    if (!authToken) {
      return json({
        body: undefined,
        error: "Bad Request",
        status: 400,
      });
    }

    if (!jwt.verify(authToken, process.env.JWT_SECRET)) {
      return json({
        body: undefined,
        error: "Authorization Failed",
        status: 401,
      });
    }

    const dbConnected = await conn();

    if (!dbConnected) {
      return json({
        body: undefined,
        error: "Database connection failed",
        status: 503,
      });
    }

    const decodedJwt = jwt.decode(authToken) as JwtPayload;
    const _id = decodedJwt["_id"];

    const user = await UserModel.findById(_id);

    if (!user) {
      return json({
        body: undefined,
        error: "Credentials didn't match",
        status: 404,
      });
    }

    console.log("User Authenticated!");

    return json({
      body: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        userId: user.userId,
      },
      error: undefined,
      status: 200,
    });
  } catch (err: any) {
    console.log(err.message);
    return json({
      body: undefined,
      error: "Internal Server Error",
      status: 500,
    });
  }
}
