const mongoose = require("mongoose");
const env = require("dotenv").config();


const connnetDB = async ()=>{
    try{

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");

    }catch(error){
     console.log("DB Connection erro",error.message);
     process.exit(1)
    }
}

module.exports = connnetDB;