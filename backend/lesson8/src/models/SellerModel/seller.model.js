const { Schema, model } = require("mongoose")

const SellerSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    location: {
        type: String,
        trim: true,
        default: ""
    },
    birthday: {
        type: String,
        default: ""
        // required: true,
    },
    images: {
        type: [String],
        default: ""

        // required: true,
    },
    bio: {
        type: String,
        // required: true,
        default: ""
    },
    adminId: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
        required: true
    },
    counterIgnorePassword:{
        type:Number,
        default:0
    },
    lastPasswordEnteredTimer:{
        type:Date,
        default:new Date()
    }
}, {
    timestamps: true

})

const SellerModel = model("Sellers", SellerSchema)

module.exports = SellerModel