const express=require('express');
const app=express();
require("./db");
const Student  = require("./studentmodel.js");
const cors = require("cors");
const productexpo =require("./productmodel")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//view
app.post("/api/student/",async(req,res)=>{

    const student = new Student(req.body);
    await student.save();

    res.status(200).json({
        success:true,
        student
    })
 })

 app.post("/api/product/", async(req,res)=>{
     const product=new productexpo(req.body);
     await product.save();
     res.status(200).json({
         success:true,product
     })
 })


app.listen(7777,()=>{
    console.log("listeng on port no 7777");
})