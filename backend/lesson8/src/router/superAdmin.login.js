const express = require("express")
const { loginSuperAdmin } = require("../config/createSuperAdmin")

const router = express.Router()

router.post("/login", loginSuperAdmin)


module.exports = router