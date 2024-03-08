import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path : "./.env"
})

const PORT = process.env.PORT || 8000

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log("MongoDB connection error :",err)
        throw new Error(err)
    })

    app.get("/", (req,res) => {
        res.send(`<h1>Welcome to Chai aur Backend</h1>`)
    })

    app.listen(PORT || 8000, () => {
        console.log(`Server started at http://localhost:${PORT}`)
    })
    
})

.catch((err) => {
    console.log("Failed to connect MongoDB :",err)
})