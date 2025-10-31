const SupperAdmin = require('../models/supperAdmin.model');

// Create a new Supper Admin
exports.createSupperAdmin = async (req, res) => {
    try {
        let user = SupperAdmin.find()
        if(user.length>0){
            return res.status(400).json({ message: "Supper admin already exists" });
        }
        const { username, password, email } = req.body;
        if (!username || !password || !email) {
            return res.status(402).json({ message: "All fields are required" });
        }
        const newSupperAdmin = new SupperAdmin({
            username,
            password,
            email,
            role: "superAdmin"
        });
        await newSupperAdmin.save();
        res.status(201).json({ message: "Supper admin created successfully", supperAdmin: newSupperAdmin });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}