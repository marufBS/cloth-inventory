import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import { mongoose } from "./db.js";
import { CustomerMolel } from "./models.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React + Redux");
});

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


app.post("/customers", async (req, res) => {
  try {
    const { customerName, customerId, customerAddress} = req.body;
    const customerAvatar = `https://i.pravatar.cc/150?u=${generateRandomString(15)}`
    console.log(customerName, customerId, customerAddress,customerAvatar)
    const newUser = new CustomerMolel({ customerName, customerId, customerAddress,customerAvatar })
    const savedUser = await newUser.save()
    res.status(200).send({ savedUser })

  } catch (error) {
    res.status(500).send({ error })
  }
})

app.get("/customers", async (req, res) => {
  try {
    const users = await CustomerMolel.find()
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.delete("/customers/:id",async(req,res)=>{
  try {
    const {id} = req.params
    const deletedUser = await CustomerMolel.findByIdAndDelete(id)
    if(!deletedUser){
      return res.status(404).send({message:"customer not found"})
    }
    res.status(200).send({message:"customer deleted successfully",deletedUser})
  } catch (error) {
    res.status(500).send({error})
  }
})

ViteExpress.listen(app,3000,()=>{
console.log("Server is listening on port 3000...")

})
