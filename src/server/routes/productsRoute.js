import express from "express"
import {  setProduct ,getProducts,editProduct,deleteProduct} from "../controllers/productsController.js"

const router = express.Router()

router.post("/api/products", setProduct)

router.get("/api/products", getProducts)

router.put("/api/products/:id", editProduct)

router.delete("/api/products/:id",deleteProduct)


export default router