const SellerModel = require("../../models/SellerModel/seller.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// yangi seller yaratish

const createSeller = async (req, res) => {
    try {
        const { username, password, email, location, birthday, images, bio, adminId } = req.body;

        const newSeller = new SellerModel({
            username,
            password,
            email,
            location,
            birthday,
            images,
            bio,
            adminId
        });
        // new kalit so'zi bilan elon qilinga o'zgaruvchi object holga keladi va mongoose ichiga object shaklida saqlanadi

        await newSeller.save();

        res.status(201).json({
            message: "Seller created successfully",
            seller: newSeller
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating seller",
            error: error.message
        });
    }
};

// barcha sellerlarni olish

const getAllSellers = async (req, res) => {
    try {
        const sellers = await SellerModel.find();

        res.status(200).json({
            message: "Sellers retrieved successfully",
            sellers
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving sellers",
            error: error.message
        });
    }
};

// login
const LoginSeller = async (req, res) => {
    try {
        let { username, password } = req?.body // optional chaining

        if (!username.length) {
            res.status(500).json({ message: "sizda email yoki login to'liq to'ldirilmagan" })
        }

        let seller = await SellerModel.findOne({ username })
        if (!seller) {
            res.status(404).json({ message: "bu seller topilmadi." })
        }
        if (seller.counterIgnorePassword >= 3) {
            res.status(409).json({ message: "siz juda kop marotaba urinib qoydizda aka!" })
            seller.lastPasswordEnteredTimer = new Date()
            return seller.save()
        }

        let hashedPassword = await bcrypt.compare(password, seller.password)

        if (!hashedPassword) {
            seller.counterIgnorePassword += 1
            seller.save()
            res.status(403).json({ message: "Login yoki parol hato" })
        }

        const token = jwt.sign(
            { seller, password: hashedPassword },
            process.env.JWT_SECRET,
            { expiresIn: "15d" }
        );

        res.status(200).json({ message: "successfully login", token })

    } catch (error) {
        res.status(500).json({
            message: "Error retrieving sellers",
            error: error.message
        });
    }
}

module.exports = {
    createSeller,
    getAllSellers,
    LoginSeller
}