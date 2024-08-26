import OrderModel from "../models/ordersModel.js"

export const saveOrder = async (req, res) => {
    try {
        const {cart} = req.body
        console.log(cart)
        const newOrder = new OrderModel(cart)
        const savedOrder = await newOrder.save()
        
        res.status(200).send(savedOrder)

    } catch (error) {
        res.status(500).send({ error })
    }
}

export const getOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find()
        res.status(200).send(orders)
    } catch (error) {
        res.status(500).send({ error })
    }
}