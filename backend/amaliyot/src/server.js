// const express = require("express")
const express = require("express")
const app = express()
const cors = require("cors")
const {connectDb} = require("./config/dbConnection.js")
require("dotenv").config()


connectDb()
app.use(cors())

app.use(express.json())

app.listen(process.env.PORT, () =>{
    
    console.log("Server " + process.env.PORT + " da ishga tushdi");
    
})