import { NextRequest } from "next/server";
import json from "../../../utils/json";
import { UserModel } from "@/db/models";
import conn from "@/db/conn";
import cryptrObj from "@/utils/cryptrObj";
import { NextApiRequest } from "next";

/*
 * This route checks if the auth token is valid is valid or not based on auth token
 */

export async function GET(req: NextRequest) {
  try {
    const authToken = req.cookies.get("auth")?.value;
    const { searchParams } = req.nextUrl;

    const pathname = searchParams.get("pathname");

    if (!authToken) {
      if (pathname === "login" || pathname === "sign-up") {
        return json({
          body: undefined,
          error: undefined,
          status: 202,
        });
      } else {
        return json({
          body: undefined,
          error: "Please login first",
          status: 401,
        });
      }
    }

    const decodedCookie = JSON.parse(cryptrObj.decrypt(authToken));
    const _id = decodedCookie["_id"];

    if (!_id) {
      return json({
        body: undefined,
        error: "Bad Request",
        status: 400,
      });
    }

    const dbConnected = await conn();

    if (!dbConnected) {
      return json({
        body: undefined,
        error: "Couldn't connect to database",
        status: 503,
      });
    }

    const foundUser = await UserModel.countDocuments({ _id });

    if (!foundUser) {
      return json({
        body: undefined,
        error: "Invalid user",
        status: 404,
      });
    }

    console.log("User Authenticated!");

    return json({
      body: undefined,
      error: undefined,
      status: 200,
    });
  } catch (err: any) {
    console.log(err.message);
    return json({
      body: undefined,
      error: "Something went wrong",
      status: 500,
    });
  }
}
