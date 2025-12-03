const { Schema } = require("mongoose");

const userInfoSchema = new Schema({
    location: {
        type: String,
        required: true,
        trim: true
    },
    birthday: {
        type: String,
        required: true,
    },
    images: {
        type: [String], 
        required: true,
    },
    bio: {
        type: String,
        required: true,
    }
}, { _id: false });

module.exports = userInfoSchema;
