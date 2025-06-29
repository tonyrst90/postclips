import { TaskApiData } from "@/app/ApiData/TaskApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(TaskApiData);
}