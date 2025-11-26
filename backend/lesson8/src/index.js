require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const {createSuperAdmin,loginSuperAdmin} = require("./config/createSuperAdmin")
const {connectingDB,disConnectingDB} = require("./config/connectionDB")
const adminRouter = require("./router/admin.router")

app.use(cors());
app.use(express.json());
app.use("/admin", adminRouter)
app.post("/kirish",loginSuperAdmin)

app.listen(process.env.PORT, ()=>{
    connectingDB()
    createSuperAdmin()
    console.log("server running http://localhost:"+process.env.PORT+"/");
})