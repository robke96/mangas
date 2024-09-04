import { NextRequest, NextResponse } from "next/server";
import { streamsDocument } from "@/model/streamModel";
import { fetchTikTokData } from "./services/tiktok";
import { fetchTwitchData } from "./services/twitch";
import { handleNewLive } from "./services/database";

const twitchUsername = process.env.TWITCH_USERNAME as string;
const tiktokUsername = process.env.TIKTOK_USERNAME as string;

export interface CheckLiveResult {
    isLive: boolean;
    stream?: streamsDocument;
}

export async function GET(request: NextRequest) {
    const platform = request.nextUrl.searchParams.get("platform");
    let data: CheckLiveResult;

    switch (platform) {
        case "tiktok":
            data = await fetchTikTokData(tiktokUsername);
            break;
        case "twitch":
            data = await fetchTwitchData(twitchUsername);
            break;
        default: 
            throw new Error("Unsupported platform.");
    }

    if (data.stream) {
        handleNewLive(data.stream);
    }

    return NextResponse.json(data, { status: 200 })
}       