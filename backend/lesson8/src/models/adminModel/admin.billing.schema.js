const { Schema } = require("mongoose");
const PayMentHistory = require("./admin.payment.history");

const billingSchema = new Schema({
    cardNumber: {
        type: String,
        required: true
    },
    paymentHistory: [PayMentHistory]
}, { _id: false });

module.exports = billingSchema;
