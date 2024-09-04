import TikTok from "tiktok-is-live";
import { CheckLiveResult } from "../route";

export const fetchTikTokData = async (username: string): Promise<CheckLiveResult> => {
    try {
        const result = await TikTok.getUser(username);

        if (result.isLive) {
            const liveCreatedTimestamp = result.data.liveRoom.startTime;
            const createdAt = new Date(liveCreatedTimestamp * 1000).toLocaleString("en-US", { timeZone: "Europe/Vilnius" });        

            return {
              isLive: true,
              stream: {
                title: result.data.liveRoom.title,
                id: liveCreatedTimestamp.toString(), // Naudoju timestamp nes tiktokas neduoda kitokio unique id
                createdAt: createdAt,
                followers: result.data.stats.followerCount,
                url: `https://tiktok.com/@${username}/live`,
                category: result.data.liveRoom.gameTagId.toString()
              }
            };
        } else {
            return { isLive: false };
        }
    } catch (err) {
        throw new Error(`TikTok fetch error: ${err}`);
    }
};
