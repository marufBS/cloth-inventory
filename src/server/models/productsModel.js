import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
  productName:{
    type:String,
    required:true,
  },
  productPrice:{
    type:Number,
    required:true
  },
  productURL:{
    type:String,
    required:true
  },
  productQuantity:{
    type:Number,
    required:true
  }
})


const ProductModel = mongoose.model('product',productSchema)


export default ProductModel