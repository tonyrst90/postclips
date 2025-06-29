import { ChatMemberApiData } from "@/app/ApiData/ChatMemberApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(ChatMemberApiData);
}