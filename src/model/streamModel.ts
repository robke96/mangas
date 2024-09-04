import mongoose, { Model } from "mongoose";

export interface streamsDocument {
    title: string;
    id: string;
    createdAt: string | Date;
    followers: number;
    url: string;
    category: string;
}

const livestreamsSchema = new mongoose.Schema<streamsDocument>({
    title: { type: String },
    id: { type: String, unique: true },
    createdAt: { type: Date || String },
    followers: { type: Number },
    url: { type: String },
    category: { type: String },
})

const StreamsDB: Model<streamsDocument> = mongoose.models?.livestreams || mongoose.model("livestreams", livestreamsSchema);
export default StreamsDB;