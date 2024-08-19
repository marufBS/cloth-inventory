import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({

    billNo: {
        type: String,
        required: true
    },
    billDate: {
        type: Date,
        required: true
    },
    customerId: {
        type: String,
        required: true,
        unique:true
    },
    paidAmount: {
        type: Number,
        required: true
    },
    products: [
        {
            productId: {
                type: String,
                required: true
            },
            productName: {
                type: String,
                required: true
            },
            productQuantity: {
                type: Number,
                required: true
            },
            productPrice: {
                type: Number,
                required: true
            },
            productDiscount: {
                type: Number
            }
        }
    ]
})

const OrderModel = mongoose.model('order',orderSchema)

export default OrderModel