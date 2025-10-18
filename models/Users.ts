import mongoose, { Document, Schema } from 'mongoose';

// 1. Define the TypeScript Interface for a User Document
// This ensures that all documents created/returned by Mongoose are correctly typed.
export interface IUser extends Document {
    name: string;
    email: string;
    // Mongoose properties like ._id are inherited from Document
}

// 2. Define your Schema, using the interface
const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        // Optional: required: true, 
    },
    email: {
        type: String,
        unique: true,
        // Optional: required: true,
    },
});

// 3. Explicitly export the model (using the ternary operator and explicit casting)
// The 'as mongoose.Model<IUser>' explicitly tells TypeScript the final type.
const User = (mongoose.models.User || 
    mongoose.model<IUser>('User', UserSchema)
) as mongoose.Model<IUser>;

export default User;
