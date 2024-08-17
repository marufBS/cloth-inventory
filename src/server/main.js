import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import { mongoose } from "./db.js";
import { CustomerMolel, ProductModel } from "./models.js";

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
    const { customerName, customerId, customerAddress } = req.body;
    const customerAvatar = `https://i.pravatar.cc/150?u=${generateRandomString(15)}`
    console.log(customerName, customerId, customerAddress, customerAvatar)
    const newUser = new CustomerMolel({ customerName, customerId, customerAddress, customerAvatar })
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

app.delete("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await CustomerMolel.findByIdAndDelete(id)
    if (!deletedUser) {
      return res.status(404).send({ message: "customer not found" })
    }
    res.status(200).send({ message: "customer deleted successfully", deletedUser })
  } catch (error) {
    res.status(500).send({ error })
  }
})

app.put("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body;
    const updateUser = await CustomerMolel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
    if (!updateUser) {
      return res.status(404).send({ message: "Customer not found" })
    }
    res.status(200).send({ message: "customer updated successfully", updateUser })
  } catch (error) {
    res.status(500).send({ error });
  }
})
const list = [
  {
    productName: "Urban Edge",
    productURL: "https://img.freepik.com/free-vector/monocolor-midnight-madness-marathon-t-shirt-design_742173-5733.jpg?t=st=1723899310~exp=1723902910~hmac=7f839903171e15010f5f4f5c1e1673244b244c499af10809b21fdb2a747e46a5&w=740",
    productPrice: 5.50
  },
  {
    productName: "Casual Vibe",
    productURL: "https://img.freepik.com/free-vector/colorful-flat-rainbow-run-marathon-t-shirt_742173-14080.jpg?t=st=1723899470~exp=1723903070~hmac=b536c1444494faabead8f5ea6324bd6f375f28973a1759a089d8790962a508f8&w=740",
    productPrice: 3.00
  },
  {
    productName: "Sunset Dreams",
    productURL: "https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups_126278-122.jpg?w=740&t=st=1723899470~exp=1723900070~hmac=2be3f70b94e5b1105150646e3d67278c911d7b5b9bdae83d0ef03fadae155292",
    productPrice: 10.00
  },
  {
    productName: "Stellar Stripes",
    productURL: "https://img.freepik.com/free-vector/simple-monocolor-home-run-hero-baseball-t-shirt_742173-8050.jpg?t=st=1723898846~exp=1723902446~hmac=022d2712af8fe63a0e4f57e40922ed9ecec6784492d78f3977047669657fe838&w=740",
    productPrice: 5.30
  },
  {
    productName: "Mystic Wave",
    productURL: "https://img.freepik.com/free-vector/pattern-cool-valentine-s-day-hearts-t-shirt_742173-13369.jpg?t=st=1723899474~exp=1723903074~hmac=f5ad8cd7ea9031089aa2520eaf4046886626f1abbee2e5b1145bf2c22303c3d7&w=740",
    productPrice: 5.30
  },
  {
    productName: "Bold Horizon",
    productURL: "https://img.freepik.com/free-photo/front-blank-white-tshirt-with-hanger-design_1409-4412.jpg?t=st=1723899476~exp=1723903076~hmac=a89d2126bdb4b343f33256fe2bd2c4a711bc5aab8c479eeebceafc36d0080b72&w=740",
    productPrice: 15.70
  },
  {
    productName: "Chill Chic",
    productURL: "https://img.freepik.com/free-photo/tattooed-biker-hand-holds-hang-with-blank-black-t-shirt-from-premium-thin-cotton-isolated-white_346278-1809.jpg?t=st=1723899477~exp=1723903077~hmac=8ff97e16760cf43741574a07b11a0b000b6565458e03e78837f435ed87b5882d&w=740",
    productPrice: 8.00
  },
  {
    productName: "Vibrant Groove",
    productURL: "https://img.freepik.com/free-photo/black-t-shirt-is-hanging-hanger-with-word-dope-it_1340-38184.jpg?t=st=1723899454~exp=1723903054~hmac=1e142421b6d4c9782238aedd8a7a414d3e21c2abb5ee35233961ec7f33dd662e&w=740",
    productPrice: 7.50
  },
  {
    productName: "Coastal Breeze",
    productURL: "https://img.freepik.com/free-photo/opened-white-tshirt-design_1409-4419.jpg?t=st=1723899073~exp=1723902673~hmac=4888d1b6d3629cc3b1693a7e00f994cd32be69b2b75d63d7e932d437483b4aa7&w=740",
    productPrice: 7.50
  },
  {
    productName: "Electric Pulse",
    productURL: "https://img.freepik.com/free-photo/isolated-opened-white-t-shirt_125540-1452.jpg?t=st=1723899336~exp=1723902936~hmac=c23981cbcbffc4e3d02edfeca3bbda5282445ab7a30527e943dfbd676348e5cb&w=1060",
    productPrice: 12.20
  },
  {
    productName: "Retro Fusion",
    productURL: "https://img.freepik.com/free-vector/flat-monocolor-volleyball-vibes-t-shirt_742173-14077.jpg?t=st=1723899483~exp=1723903083~hmac=120f38e1aa5a4ffe51a26bd8b10277baca4f9014ccbe6062a5f1c7443c8e77e4&w=740",
    productPrice: 12.20
  },
  {
    productName: "Lunar Light",
    productURL: "https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups-04_126278-125.jpg?w=740&t=st=1723899484~exp=1723900084~hmac=c49b0e703e8ff130d535e9b7bf7afa64d26f4d4453e28b735bbce551667fe355",
    productPrice: 12.20
  },
];
app.post("/products", async (req, res) => {
  try {
    const {productName,productPrice,productURL} = req.body
    const product = new ProductModel({productName,productPrice,productURL})
    const savedProduct = await product.save()
    res.status(200).send({ message: "product saved successfully", savedProduct })
  } catch (error) {
    res.status(500).send({ error })
  }
})

ViteExpress.listen(app, 3000, () => {
  console.log("Server is listening on port 3000...")

})
