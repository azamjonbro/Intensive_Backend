require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const {createSuperAdmin} = require("./config/createSuperAdmin")
const {connectingDB,disConnectingDB} = require("./config/connectionDB")
const adminRouter = require("./router/admin.router")

app.use(cors());
app.use(express.json());
app.use("/admin", adminRouter)


app.listen(process.env.PORT, ()=>{
    connectingDB()
    createSuperAdmin()
    console.log("server running http://localhost:"+process.env.PORT+"/");
})