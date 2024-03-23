import { NextResponse } from "next/server";

export default function json(obj: Record<string, any>) {
  return NextResponse.json(obj);
}
