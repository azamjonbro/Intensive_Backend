const express = require('express');

const router = express.Router();

const {createUser, updateUser, deleteUser,getAllUsers, getUserById } = require("../controllers/user.controller")



router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);

module.exports = router;