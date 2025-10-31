const express = require('express');
require("dotenv").config();
const cors = require("cors")
const {createSupperAdmin} = require("./controllers/supperadmin.controller")


const app = express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5167","https://azamjonbro.uz"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
})) //cors middleware
app.post("/", createSupperAdmin)


app.listen(process.env.PORT || 5666,()=>{
    console.log("server connection successfully");
})