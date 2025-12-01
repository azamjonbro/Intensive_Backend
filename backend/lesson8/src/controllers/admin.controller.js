const adminModel = require("../models/adminModel/admin.model")
const SuperAdminModel = require("../models/superAdmin.js")
const bcrypt = require("bcrypt")
const createAdmin = async (req, res) => {
    try {
        const { username, password, email } = req.body
        let hashedPass = await bcrypt.hash(password, 10)
        const admin = new adminModel({
            username,
            email,
            password: hashedPass
        })
        const superAdmin = await SuperAdminModel.findOne(); // .exec() ham qo'yish mumkin: .findOne().exec()
        if (!superAdmin) return res.status(400).json({ message: "SuperAdmin topilmadi" });

        // endi document bo'lgani uchun .save() ishlaydi
        superAdmin.admins.push(admin._id);
        await superAdmin.save();

        await admin.save()
        res.status(201).json({ message: "admin successfully created", data: admin })
    } catch (error) {
        console.log(error.message);

        res.status(500).json({ message: "serverda hatolik mavjud. admin qo'shishda" })
    }
}
const getAdmins = async (req, res) => {
    try {
        let admins = await adminModel.find()


        res.status(200).json({ message: "succesfully get admins", data: admins })
    } catch (error) {
        res.status(500).json({ message: "serverda hatolik mavjud. admin qo'shishda" })
    }
}
const updateAdmin = async (req, res) => {
    try {
        let { id, username, password } = req.body
        let updateAdmin = await adminModel.findByIdAndUpdate(id, { username, password }, { new: true })

        res.status(200).json({ message: "admin successfully updated", data: updateAdmin })

    } catch (error) {
        res.status(500).json({ message: "serverda hatolik mavjud. admin qo'shishda" })
    }
}
const deleteAdmin = async (req, res) => {
    try {
        let { id } = req.body
        let deleteAdmin = await adminModel.findByIdAndDelete(id)

        res.status(200).json({ message: "admin successfully deleted", data: deleteAdmin })

    } catch (error) {
        res.status(500).json({ message: "serverda hatolik mavjud. admin qo'shishda" })
    }
}

module.exports = {
    createAdmin,
    getAdmins,
    deleteAdmin,
    updateAdmin
}