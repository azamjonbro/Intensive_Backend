const { Schema, model } = require("mongoose")
const AdminModel = require("./adminModel/admin.model.js")
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
    admins: [{
        type: Schema.Types.ObjectId,
        ref: "Admin"
    }]
}, {
    timestamps: true
})

const superAdmin = model("superadmin", superAdminModel)
module.exports = superAdmin