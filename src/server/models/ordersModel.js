import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({

    customerPhone: {
        type: String,
    },
    billDate: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true,
    },
    customerName:{
        type:String,
        required:true,
    },
    paidAmount: {
        type: Number,
    },
    dueAmount:{
        type:Number,
    },
    totalBill:{
        type:Number,
    },
    productList: [
        {
            _id: {
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
            productURL:{
                type:String,
                required:true
            }
        }
    ]
})

const OrderModel = mongoose.model('order',orderSchema)

export default OrderModel