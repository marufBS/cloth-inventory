import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  fullname:{
    type:String,
    required:true,
    unique:true
  },
  address:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
})



const UserModel = mongoose.model('user',userSchema);

// Export Model
export { UserModel };