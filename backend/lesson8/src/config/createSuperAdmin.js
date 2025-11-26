const superAdminModel = require("../models/superAdmin")
const bcrypt = require("bcrypt")

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

module.exports={createSuperAdmin}