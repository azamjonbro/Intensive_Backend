const mongoose = require('mongoose');

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB ga muvaffaqiyatli ulandi.');
    } catch (error) {
        console.error('MongoDB ga ulanishda xatolik yuz berdi:', error);
        process.exit(1); // Dasturdan chiqish
    }
};