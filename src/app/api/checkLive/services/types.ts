interface TwitchApiResponseUser {
    banned: boolean;
    displayName: string;
    login: string;
    id: string;
    bio: string;
    follows: any; 
    followers: number;
    profileViewCount: number | null;
    panelCount: number;
    chatColor: string;
    logo: string;
    banner: string;
    verifiedBot: any; 
    createdAt: string;
    updatedAt: string;
    emotePrefix: string;
    roles: {
        isAffiliate: boolean;
        isPartner: boolean;
        isStaff: boolean | null;
    };
    badges: any[]; 
    chatterCount: number;
    chatSettings: {
        chatDelayMs: number;
        followersOnlyDurationMinutes: number | null;
        slowModeDurationSeconds: number | null;
        blockLinks: boolean;
        isSubscribersOnlyModeEnabled: boolean;
        isEmoteOnlyModeEnabled: boolean;
        isFastSubsModeEnabled: boolean;
        isUniqueChatModeEnabled: boolean;
        requireVerifiedAccount: boolean;
        rules: string[];
    };
    stream: Stream | null; 
    lastBroadcast: {
        startedAt: string;
        title: string;
    };
    panels: {
        id: string;
    }[];
}

interface Stream {
    title: string;
    id: string;
    createdAt: Date;
    type: string;
    viewersCount: number;
    game: {
        displayName: string;
    };
}

export type TwitchApiResponse = TwitchApiResponseUser[]