//! First Approach
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants"
import express from "express"
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (err) => {
            console.log(err)
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on http://localhost:${process.env.PORT}`)
        })
    } catch (err) {
        console.log(err)
        throw err
    }
})()
*/

//! Second Approach
// require('dotenv').config({path: "./env"})

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path : "./env"
})

const PORT = process.env.PORT || 8000

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log(err)
        throw err
    })

    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`)
    })
})
.catch((err) => {
    console.log(`MongoDB connection failed !!!`,err)
})
