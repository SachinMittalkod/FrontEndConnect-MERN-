
const mongoose=require('mongoose');


const productschema= new mongoose.Schema({
    productId:{type:String, required:true},
    productName:{type:String, required:true}

})

const productexpo=mongoose.model("product", productschema);

module.exports=productexpo;