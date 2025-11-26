const express = require("express")
const { createAdmin, getAdmins, deleteAdmin, updateAdmin } = require("../controllers/admin.controller")
const {loginAdmin} = require("../controllers/login.controller")
const router = express.Router()
const {superAdminMiddleware} = require("../middlewares/superadmin.middlewares")

router.post("/create", superAdminMiddleware,createAdmin)
router.post("/login", loginAdmin)
router.get("/all", superAdminMiddleware,getAdmins)
router.put("/update",superAdminMiddleware,updateAdmin)
router.delete("/delete", superAdminMiddleware,deleteAdmin)

module.exports = router