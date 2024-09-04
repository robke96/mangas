import { TwitchApiResponse } from "./types";
import { CheckLiveResult } from "../route";

export const fetchTwitchData = async (username: string): Promise<CheckLiveResult> => {
    try {
        const response = await fetch(`https://api.ivr.fi/v2/twitch/user?login=${username}`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Twitch API error: ${response.statusText}`);
        }

        const jsonResult: TwitchApiResponse = await response.json();
        const user = jsonResult[0];

        if (user.stream) {
            return { isLive: true, stream: {
                title: user.stream.title,
                id: user.stream.id,
                createdAt: user.stream.createdAt,
                followers: user.followers,
                url: `https://twitch.tv/${username}`,
                category: user.stream.game.displayName,
            }};
        } else {
            return { isLive: false };
        }
    } catch (err) {
        throw new Error(`Twitch fetch error: ${err}`);
    }
};