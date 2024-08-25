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
  productStock:{
    type:Number,
    required:true
  }
})


const ProductModel = mongoose.model('product',productSchema)


export default ProductModel