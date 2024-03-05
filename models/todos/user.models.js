import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// }, { timestamps: true })

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        min: [6, "Password must be of atleast 6 characters"]
    }
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)