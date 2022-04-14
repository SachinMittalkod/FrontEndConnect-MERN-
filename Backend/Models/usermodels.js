const mongoose= require('mongoose')
const validatate= require('validator')

const userSchema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true,
    validate:[validator=isEmail, "Enter Email"],
    password:{
        type:String,
        required:[true,"Enter the passwword"],
        select:false
    },
    avatar:{
        publicId:{type:String, required:true},
        url:{type:String, required:true}
    },
    role:{type:String, default:user},
    resetpasswordToken:String,
    resetpasswordExpire:Date,
},

})

module.exports=mongoose.model("User",userSchema)