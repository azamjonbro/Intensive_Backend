const superAdminModel = require("../models/SuperAdmin/superAdmin")
const bcrypt = require("bcrypt")
const jwt  = require("jsonwebtoken")

const createSuperAdmin = async ()=>{
    try {
        let superadmin = await superAdminModel.findOne()

        if(superadmin){
            return console.log("superadmin already exist")
        }
        let password= await bcrypt.hash("Bro1122@", 10)
        let user = {
            username:"superAdmin",
            email:"azamjonbro",
            password:password,
            role:"superadmin"
        }

        await superAdminModel.create(user)

        console.log("superadmin successfully created", user);
        
    } catch (error) {
        console.log("SuperAdmin yaratilishida hatolik.");
        
    }
}
const loginSuperAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // 1) Foydalanuvchi qidirish
        const user = await superAdminModel.findOne({ username });
        
        if (!user) {
            return res.status(404).json({
                message: "superAdmin topilmadi"
            });
        }

        // 2) Parolni solishtirish
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        // 3) Token yaratish
        const token = jwt.sign(
            {user,password:validPassword },
            process.env.JWT_SECRET,
            { expiresIn: "15d" }
        );

        return res.status(200).json({
            message: "Successfully login",
            token,
            data:user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports={createSuperAdmin, loginSuperAdmin}