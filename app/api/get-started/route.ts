import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_NAME!;

export async function POST(req: Request) {
  try {
    console.log("📡 Connecting to MongoDB for get started...");

    const client = await MongoClient.connect(uri);
    console.log("✅ MongoDB connected");

    const db = client.db(dbName);
    const collection = db.collection("getstarted");

    const body = await req.json();

    // Save all fields from the form
    const getStartedToSave = {
      name: body.name,
      email: body.email,
      whatsapp: body.whatsapp || "",
      message: body.message,
      service: body.service || "",
      createdAt: new Date()
    };

    await collection.insertOne(getStartedToSave);

    console.log("📥 Get Started saved:", getStartedToSave);

    return NextResponse.json({ message: "Get Started form saved successfully" });
  } catch (error) {
    console.error("❌ Error saving get started form:", error);
    return NextResponse.json({ message: "Error saving get started form" }, { status: 500 });
  }
}
