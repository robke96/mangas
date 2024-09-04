const webhookURL = process.env.DISCORD_WEBHOOK_URL as string;

export const sendDiscordWebhook = async (message: string) => {
    try {
        const res = await fetch(webhookURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: message }),
        })
    
        if (!res.ok) {
            throw new Error("Failed to send message");
        }
    } catch(err: any) {
        console.log(err.message);
    }
}