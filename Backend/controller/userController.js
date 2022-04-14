const usermodels = require("../Models/usermodels")

exports.controlls=(req,res)=>{
    const{name,email,password}=req.body;

    const user= await User.create({
        name,email,password,
        avatar:{publicId:"sample publicID",
            url:"profile_url"
        }
    })
    res.status(200).json({
        success:true,user
    })
}