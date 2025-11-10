const mongoose = require("mongoose")


exports.connectDb =async ()=>{
    try {
        mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("mongoose connection successfully");
            
        })
        .catch((error)=>{
            console.log(error.message);
            
        })
    } catch (error) {
        
    }
}