import OrderModel from "../models/ordersModel.js"

// const list = [
//     {
//         billNo: "343578",
//         billDate: new Date(),
//         customerId: "236586",
//         paidAmount: 20,
//         products: [
//             {
//                 productId: "3454254",
//                 productName: "Yesterday Night",
//                 productQuantity: 2,
//                 productPrice: 38,
//                 productDiscount: 5
//             },
//             {
//                 productId: "457589",
//                 productName: "Sympson Tompson",
//                 productQuantity: 4,
//                 productPrice: 38,
//                 productDiscount: 5
//             },
//             {
//                 productId: "2355480",
//                 productName: "Arju Nagin",
//                 productQuantity: 3,
//                 productPrice: 38,
//                 productDiscount: 5
//             }
//         ]
//     },
//     {
//         billNo: "346433",
//         billDate: new Date(),
//         customerId: "357964",
//         paidAmount: 39,
//         products: [
//             {
//                 productId: "347556",
//                 productName: "ThugLife",
//                 productQuantity: 1,
//                 productPrice: 20,
//                 productDiscount: 5
//             },
//             {
//                 productId: "233688",
//                 productName: "Listen Joys",
//                 productQuantity: 6,
//                 productPrice: 30,
//                 productDiscount: 10
//             },
//             {
//                 productId: "889542",
//                 productName: "Play Date",
//                 productQuantity: 5,
//                 productPrice: 99,
//                 productDiscount: 1
//             }
//         ]
//     },
//     {
//         billNo: "343485",
//         billDate: new Date(),
//         customerId: "234623",
//         paidAmount: 64,
//         products: [
//             {
//                 productId: "869996",
//                 productName: "Daysie Girl",
//                 productQuantity: 4,
//                 productPrice: 25,
//                 productDiscount: 8
//             },
//             {
//                 productId: "434677",
//                 productName: "Guitarist Boy",
//                 productQuantity: 4,
//                 productPrice: 40,
//                 productDiscount: 15
//             },
//             {
//                 productId: "334556",
//                 productName: "Blossom Eye",
//                 productQuantity: 3,
//                 productPrice: 35,
//                 productDiscount: 15
//             }
//         ]
//     },
// ]



export const saveOrder = async (req, res) => {
    try {
        const orders = OrderModel.insertMany(list)
            .then((res) => {
                console.log(res)
            })
        res.status(200).send({ orders })
        // console.log(orders)

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