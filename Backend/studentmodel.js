const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


const Student = mongoose.model("Student",StudentSchema);
module.exports = Student;
//model