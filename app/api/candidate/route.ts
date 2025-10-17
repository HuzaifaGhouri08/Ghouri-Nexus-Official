
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_NAME!;

export async function POST(req: Request) {
  try {
    console.log("📡 Connecting to MongoDB for candidate...");

    const client = await MongoClient.connect(uri);
    console.log("✅ MongoDB connected");

    const db = client.db(dbName);
    const collection = db.collection("candidates");

    const formData = await req.formData();

    // File handling
    const file = formData.get("file") as File | null;
    let fileBase64 = "";
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      fileBase64 = Buffer.from(arrayBuffer).toString("base64");
    }

    // Candidate object
    const candidateToSave = {
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      portfolio: formData.get("portfolio"),
      experience: formData.get("experience"),
      anything: formData.get("anything"),
      file: fileBase64,
      createdAt: new Date()
    };

    await collection.insertOne(candidateToSave);

    console.log("📥 Candidate saved:", candidateToSave);

    return NextResponse.json({ message: "Candidate form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving candidate:", error);
    return NextResponse.json({ message: "Error submitting candidate form" }, { status: 500 });
  }
}
