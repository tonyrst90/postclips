import { SearchResultApiData } from "@/app/ApiData/SearchResultApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json(SearchResultApiData);
}