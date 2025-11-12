const {Schema, model} = require("mongoose")
// desturcuring usuli bilan mongodb ichidagi schema va modelni chiqarib oldik

const userSchema = new Schema({
    // yangi schema yaratub uni ichiga user uchun proprety yaratib qoydik.
    username:{
        type:String,
        default:"user",
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    }
})

const userModel = model("User",userSchema)

module.exports = userModel

// vazifasi userModel ni global ga chiqarib beradi.