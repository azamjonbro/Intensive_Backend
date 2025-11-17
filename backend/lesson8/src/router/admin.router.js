const express = require("express")
const { createAdmin, getAdmins, deleteAdmin, updateAdmin } = require("../controllers/admin.controller")
const router = express.Router()


router.post("/create",createAdmin)
router.get("/all",getAdmins)
router.put("/update",updateAdmin)
router.delete("/delete",deleteAdmin)

module.exports = router