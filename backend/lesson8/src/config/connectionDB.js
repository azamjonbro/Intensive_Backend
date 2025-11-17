const mongoose = require("mongoose")

const connectingDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("mongodb connection successsfully");
        })
        .catch((error)=>{
            console.log("mongodbga ulanishda hatolik mavjud:" +error.message);
        })
    } catch (error) {
        console.log("serverda hatolik mavjud:"+ error.message);
    }
}
const disConnectingDB = async () => {
    try {
        mongoose.disconnect()
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { connectingDB, disConnectingDB }