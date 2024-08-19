import express from "express"
import { getOrders, saveOrder } from "../controllers/ordersController.js"

const router = express.Router()

router.post("/api/orders",saveOrder)

router.get("/api/orders",getOrders)

export default router