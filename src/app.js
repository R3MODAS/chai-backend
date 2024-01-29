import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

// configurations
const app = express();

// config for cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// config for accepting json as request
app.use(express.json({
    limit: "16kb"
}))

// config for getting data from url
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

// config to store some document in our public folder (videos,pdf,files)
app.use(express.static("public"))

// config to do crud operations on cookies
app.use(cookieParser())

export { app }