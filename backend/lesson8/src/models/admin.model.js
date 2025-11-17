const {Schema,model} = require("mongoose")

const adminSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }
},{
    timestamps:true
})

const adminModel = model("yangi", adminSchema)

module.exports = adminModel