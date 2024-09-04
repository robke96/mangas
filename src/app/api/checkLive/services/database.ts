import { sendDiscordWebhook } from './sendWebhook';
import { connectToMongoDB } from "@/lib/mongodb";
import { streamsDocument } from "@/model/streamModel";
import StreamsDB from "@/model/streamModel";

const DISCORD_WEBHOOK_MESSAGE = process.env.DISCORD_MESSAGE as string;
const DISCORD_WEBHOOK_ENABLED = process.env.DISCORD_NOTIFICATION_ENABLE as string;

export const handleNewLive = async (currentStream: streamsDocument) => {
    await connectToMongoDB();
    const previousStream = await StreamsDB.findOne().sort({ _id: -1 });

    if (previousStream) {
        if (previousStream.id !== currentStream.id) {
            await StreamsDB.create({
                title: currentStream.title,
                id: currentStream.id,
                createdAt: currentStream.createdAt,
                followers: currentStream.followers,
                category: currentStream.category,
                url: currentStream.url
            })

            if (Boolean(DISCORD_WEBHOOK_ENABLED).valueOf()) {
                await sendDiscordWebhook(DISCORD_WEBHOOK_MESSAGE);
            }
        }
    } 
} 