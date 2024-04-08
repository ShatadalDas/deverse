import { NextRequest } from "next/server";
import json from "@/utils/json";
import { PostModel, UserModel } from "@/db/models";
import conn from "@/db/conn";
import { PostSchema as RequestBodySchema } from "@/utils/zodSchema";
import { z } from "zod";
import cryptrObj from "@/utils/cryptrObj";
import numToStrWithPrefixZero from "@/utils/numToStrWithPrefixZero";
import mongoose from "mongoose";

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

    const authToken = req.cookies.get("auth")?.value;

    if (!authToken) {
      return json({
        error: "User Unauthorized",
        status: 401,
      });
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

    const user = await UserModel.findById(_id);

    if (!user) {
      return json({
        body: undefined,
        error: "Invalid user",
        status: 404,
      });
    }

    const parsedReqBody = RequestBodySchema.parse(requestBodyJson);

    const dateObj = new Date();

    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    const monthInd = dateObj.getMonth();

    const hrs = dateObj.getHours();
    const mins = dateObj.getMinutes();

    const time =
      hrs >= 12
        ? numToStrWithPrefixZero(hrs % 13) +
          ":" +
          numToStrWithPrefixZero(mins) +
          " PM"
        : numToStrWithPrefixZero(hrs) +
          ":" +
          numToStrWithPrefixZero(mins) +
          " AM";

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const fullDate =
      date.toString() + " " + months[monthInd] + ", " + year.toString();

    const savedPost = await PostModel.create({
      ...parsedReqBody,
      hashtags: parsedReqBody.hashtags?.replace(/\s+/g, " ").trim().split(" "),
      author: user._id,
      time,
      date: fullDate,
    });

    if (savedPost) {
      console.log("Post created with id: ", savedPost._id);

      return json({
        body: savedPost,
        status: 201,
      });
    }
  } catch (e: any) {
    console.log(e.message);

    return json({
      error: "Internal Server Error",
      status: 500,
    });
  }
}
