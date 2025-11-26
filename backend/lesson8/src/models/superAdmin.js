const { Schema, model } = require("mongoose")

const superAdminModel = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "superadmin"
    },
}, {
    timestamps: true
})

const superAdmin = model("superadmin", superAdminModel)
module.exports = superAdmin