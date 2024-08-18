import express from "express"
import { deleteCustomer, getCustomers, saveCustomer, updateCustomer } from "../controllers/customersController.js";

const router = express.Router()

router.post("/api/customers", saveCustomer)

router.get("/api/customers", getCustomers)

router.put("/api/customers/:id", updateCustomer)

router.delete("/api/customers/:id", deleteCustomer)


export default router