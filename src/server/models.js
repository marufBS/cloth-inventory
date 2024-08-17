import mongoose from 'mongoose';


const customerSchema = new mongoose.Schema({
  customerName:{
    type:String,
    required:true,
  },
  customerId:{
    type:String,
    required:true,
    // unique:true
  },
  customerAddress:{
    type:String,
    required:true
  },
  customerAvatar:{
    type:String,
    required:true,
    // unique:true
  }
  // username:{
  //   type:String,
  //   required:true,
  //   unique:true,
  //   trim:true
  // },
  // email:{
  //   type:String,
  //   required:true,
  //   unique:true,
  //   match: [/.+\@.+\..+/, 'Please fill a valid email address']
  // },
  // password:{
  //   type:String,
  //   required:true,
  //   minlength:6
  // },
  // isAdmin:{
  //   type:Boolean,
  //   default:false
  // }
})

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
  }
})


const CustomerMolel = mongoose.model('customer',customerSchema);
const ProductModel = mongoose.model('product',productSchema)

// Export Model
export { CustomerMolel,ProductModel };