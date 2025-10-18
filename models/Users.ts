import mongoose from 'mongoose';

// 1. Define your Schema
const UserSchema = new new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
});

// 2. Explicitly check and export
let User;

// If mongoose.models.User exists (i.e., it was already created)
if (mongoose.models.User) {
    // Retrieve the existing model
    User = mongoose.model('User');
} else {
    // Create the new model
    User = mongoose.model('User', UserSchema);
}

export default User;
