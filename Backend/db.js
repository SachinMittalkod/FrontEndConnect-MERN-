const mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/Ankit").then(()=>console.log("Connected to Database"));