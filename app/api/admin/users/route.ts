import { connectDB } from "@/lib/db";
// 1. Import the default export (the Mongoose Model for querying)
// 2. Import the named export (the IUser interface for typing the results)
import User, { IUser } from '@/models/Users'; 
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await connectDB();
        
        // Use the IUser interface to explicitly type the 'users' variable
        const users: IUser[] = await User.find(); // find() returns an array of documents
        
        return NextResponse.json(users); 
        
    } catch (error) {
        console.error('❌ API Error:', error); 
        return NextResponse.json(
            { message: 'Error fetching users' },
            { status: 500 }
        );
    }
}
