import { NextResponse } from 'next/server';
import StreamsDB from "@/model/streamModel";
import { connectToMongoDB } from '@/lib/mongodb';

// svarbus, kitaip ant prod. neatnaujins!
export const dynamic = 'force-dynamic'

export async function GET() {
    await connectToMongoDB();
    try {
        const data = await StreamsDB.find().sort({ _id: -1 });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}