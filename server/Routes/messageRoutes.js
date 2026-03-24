
import express from "express"
import { protect } from "../Middleware/auth.js";
import { imageMessageController, textMessageController } from "../controller/messageController.js";


const messageRouter = express.Router();

messageRouter.post("/image", protect, imageMessageController  )
messageRouter.post('/text' ,protect, textMessageController  )



export default messageRouter