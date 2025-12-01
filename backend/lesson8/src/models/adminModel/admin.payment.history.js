const { Schema } = require("mongoose");

const paymentHistorySchema = new Schema({
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    currency: {
        type: String,
        default: "UZS",
        uppercase: true
    },
    paymentMethod: {
        type: String,
        enum: ["payme", "click", "stripe", "paypal", "card", "cash"],
        required: true
    },
    status: {
        type: String,
        enum: ["success", "pending", "failed"],
        default: "pending"
    },
    transactionId: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    paidAt: {
        type: Date,
        default: Date.now
    },

    // optional, analytics uchun foydali
    metadata: {
        device: { type: String, default: null },
        ip: { type: String, default: null }
    }
}, {
    _id: false, // history ichida bo'lgani uchun
    timestamps: true
});

module.exports = paymentHistorySchema;
