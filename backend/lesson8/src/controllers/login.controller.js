const AdminModel = require("../models/adminModel/admin.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const loginAdmin = async (req, res) => {
    try {
        let { username, password } = req.body
        let admin = await AdminModel.findOne({ username })

        if (!admin) {
            return res.status(404).json({ message: "Admin topilmadi" })
        }

        let isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Parol noto'g‘ri" })
        }
        let token = jwt.sign({username, password}, process.env.JWT_SECRET,  { expiresIn: "15d" })

        let dec = jwt.decode(token, process.env.JWT_SECRET)
        console.log(dec);
        
        res.status(200).json({
            message: "Login muvaffaqiyatli",
            token,
            admin
        })

    } catch (error) {
        res.status(500).json({ message: "Server xatosi: " + error.message })
    }
}


module.exports = {loginAdmin}
