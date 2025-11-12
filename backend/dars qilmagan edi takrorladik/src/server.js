const express = require("express")
const cors = require("express")
const userModel = require("./models/user.model")
const dbConnection = require("./config/dbConnection")
const { createUser } = require("./controllers/user.controller")
require("dotenv").config()
// bu yerda biz modellni server js ga chaqirib ishlatdik.

const app = express()
// bu yerda app o'zgaruvchisiga express ichidan chiqadigan har qanday method yoki har qanday amallarni chqirish uchun uni ishga tushurdik.

app.use(express.json())
// bu yerda app ichida yani butun bizni expressimiz ichida alishilgan malumotlarni json formatiga o'tkazib oldik.

app.use(cors())
// bu corsning vazifasi biz yozayotgan back endni malum bir manzilga qaratib uni eshitish va unga malumot yuborish uchun ishlatiladigan havfsiz kutubxona.

dbConnection.connectDB()

app.post("/api/user",createUser)

app.listen(process.env.PORT,()=>{
    console.log("server ishga tushdi. Port: " + process.env.PORT);
})

// bu yerda app biz uuchun mahsus tunel yaratyapti va bu tunel uchun yuborilgan xar qadnay zapros yani (req, res) ga reqni qabul qiladi va resni yuborib beradi shu port orqali.