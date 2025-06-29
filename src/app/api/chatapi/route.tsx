import { ChatApiData } from "@/app/ApiData/ChatApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(ChatApiData);
}