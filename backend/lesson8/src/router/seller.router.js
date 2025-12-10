const express = require("express")
const {createSeller, getAllSellers, LoginSeller} = require("../controllers/SellerController/seller.controller")
const router = express.Router()

router.post("/createSeller",createSeller)
router.post("/getSellers",getAllSellers)
router.post("/loginSeller", LoginSeller)

module.exports= router