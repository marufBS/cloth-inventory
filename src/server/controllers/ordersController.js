import OrderModel from "../models/ordersModel.js"
import ProductModel from "../models/productsModel.js"

export const saveOrder = async (req, res) => {
    
        const cart = req.body.cart
        const newOrder = new OrderModel(cart);
        const savedOrder = await newOrder.save()

        await cart.productList.map(async (item) => {
            console.log('item')
            const snapshot = await ProductModel.findOneAndUpdate({ _id: item._id }, { $inc: { productStock: -item.productQuantity } })
        })


        res.status(200).send(savedOrder);
}

export const getOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find()
        res.status(200).send(orders)
    } catch (error) {
        res.status(500).send({ error })
    }
}