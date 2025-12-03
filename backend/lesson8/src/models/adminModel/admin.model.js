const { Schema, model } = require("mongoose");
const userInfoSchema = require("./admin.userInfo.schema");
const billingSchema = require("./admin.billing.schema");

const adminSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    adminInfo: [userInfoSchema],
    billing: billingSchema
}, {
    timestamps: true
});

const adminModel = model("Admin", adminSchema);

module.exports = adminModel;
