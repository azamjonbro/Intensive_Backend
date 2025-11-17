const adminModel = require("../models/admin.model")

const createAdmin = async (req, res)=>{
    try {
        const {username, password} = req.body
        const admin =  new adminModel({
            username,
            password
        })
        admin.save()

        res.status(201).json({message:"admin successfully created", data:admin})
    } catch (error) {
        res.status(500).json({message:"serverda hatolik mavjud. admin qo'shishda"})
    }
}
const getAdmins = async (req, res)=>{
    try {
        let admins = await adminModel.find()
        

        res.status(200).json({message:"succesfully get admins",data:admins})
    } catch (error) {
        res.status(500).json({message:"serverda hatolik mavjud. admin qo'shishda"})
    }
}
const updateAdmin = async (req, res)=>{
    try {
        let {id, username, password} = req.body
        let updateAdmin = await adminModel.findByIdAndUpdate(id, {username, password}, {new:true})

        res.status(200).json({message:"admin successfully updated", data:updateAdmin})

    } catch (error) {
         res.status(500).json({message:"serverda hatolik mavjud. admin qo'shishda"})
    }
}
const deleteAdmin = async (req, res)=>{
    try {
        let {id} = req.body
        let deleteAdmin = await adminModel.findByIdAndDelete(id)

        res.status(200).json({message:"admin successfully deleted", data:deleteAdmin})

    } catch (error) {
         res.status(500).json({message:"serverda hatolik mavjud. admin qo'shishda"})
    }
}

module.exports={
    createAdmin,
    getAdmins,
    deleteAdmin,
    updateAdmin
}