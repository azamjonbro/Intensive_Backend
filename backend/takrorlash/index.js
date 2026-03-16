const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const cors= require("cors")
const app = express()

app.use(cors({
    origin:["https://www.azamjonbro.uz", "https://www.admin.azamjonbro.uz"],
    credentials:true,
    allowedHeaders:["Content-Type", "Authorization"],
    allowMethods:["GET"]
}))


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("db successfully connected");
    
})
.catch((error)=>{
    console.log(error);
    console.log("%cdb ulanishda hatolik", "font-size:64px; color:red;");
})




app.listen(9999, ()=>{
    console.log("server shu portda ishlayapti : " + 9999);
    console.log("hello");
    console.log("dumbul bola");
    
    
})