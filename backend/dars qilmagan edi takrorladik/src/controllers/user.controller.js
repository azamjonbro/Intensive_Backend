const UserModel = require("../models/user.model")


exports.createUser = async (req,res)=>{
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json({message:"Foydalanuvchi muvaffaqiyatli yaratildi", user:newUser});
    } catch (error) {
        res.status(500).json({message:"Serverda xatolik yuz berdi", error:error.message})
    }
}