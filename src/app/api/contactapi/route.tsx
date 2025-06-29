import { ContactApiData } from "@/app/ApiData/ContactApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(ContactApiData);
}