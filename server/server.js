import "dotenv/config"
import express from "express"

import cors from "cors"
import connectDB from "./config/db.js"
import userRouter from "./Routes/userRoutes.js"
import chatRouter from "./Routes/chatRoutes.js"
import messageRouter from "./Routes/messageRoutes.js"
import creditRouter from "./Routes/creditRoute.js"
import { stripeWebhooks } from "./controller/webhooks.js"


const app = express()

await connectDB()

// Stripe WebHooks
app.post("/api/stripe", express.raw({type: 'application/json'}),
stripeWebhooks)


//Middleware
app.use(cors())
app.use(express.json())

//Routes 
app.get("/" , (req, res)=> res.send(`Server is Live!`))
app.use("/api/user" , userRouter)
app.use("/api/chat", chatRouter)
app.use("/api/message", messageRouter)
app.use("/api/credit", creditRouter)



const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})