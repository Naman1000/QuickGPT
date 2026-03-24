
import express from "express"
import { getPlans, purchasePlan } from "../controller/creditController.js"
import { protect } from "../Middleware/auth.js"

const  creditRouter = express.Router()

creditRouter.get('/plan', getPlans)
creditRouter.post('/purchase', protect, purchasePlan )
 


export default creditRouter