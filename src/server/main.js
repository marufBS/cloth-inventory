import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
// import cors from "cross-env"
import cors from "cors"
import { mongoose } from "./db.js";
import productRouter from "./routes/productsRoute.js"
import customerRouter from "./routes/customersRoute.js";
import orderRouter from "./routes/ordersRoute.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({origin:"*"}))

app.use(productRouter)
app.use(customerRouter)
app.use(orderRouter)

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React + Redux");
});



ViteExpress.listen(app, 3000, () => {
  console.log("Server is listening on port 3000...")

})
