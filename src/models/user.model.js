import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter your username"],
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: [true, "Please enter your email"]
        },
        fullName: {
            type: String,
            required: [true, "Please enter your fullname"]
        },
        avatar: {
            type: String,
            required: [true, "Please enter your avatar"]
        },
        coverImage: {
            type: String,
            required: [true, "Please enter your coverImage"]
        },
        password: {
            type: String,
            required: [true, "Please enter your password"]
        },
        refreshToken: {
            type: String,
            required: [true, "Please enter your refreshToken"]
        }
    },
    { timestamps: true }
)

export const User = mongoose.model("User", userSchema)