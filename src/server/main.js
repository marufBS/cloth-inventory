import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import { mongoose } from "./db.js";
import productRouter from "./routes/productsRoute.js"
import customerRouter from "./routes/customersRoute.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(productRouter)
app.use(customerRouter)

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React + Redux");
});



ViteExpress.listen(app, 3000, () => {
  console.log("Server is listening on port 3000...")

})
