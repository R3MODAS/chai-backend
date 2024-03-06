//! First Approach
// import express from "express"
// import { DB_NAME } from "./constants";

// const app = express()
// const PORT = process.env.PORT

// ;(async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.log(err)
//             throw new Error(err)
//         })
//         app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
//     } catch (err) {
//         console.log(err)
//         throw new Error(err)
//     }
// })()


//! Second Approach
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log(err)
    })
    app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))
})
.catch((err) => {
    console.log("MONGODB connection failed : ",err)
})