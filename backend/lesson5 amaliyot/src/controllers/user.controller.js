const UserModel = require('../models/user.model');

exports.createUser = async(req, res)=>{
    try {
        const { username, email, password } = req.body;
        const newUser = new UserModel({ username, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

exports.getUserById = async(req, res)=>{
    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

exports.updateUser = async(req, res)=>{
    try {
        const userId = req.params.id;
        const updates = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(userId, updates, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

exports.deleteUser = async(req, res)=>{
    try {
        const userId = req.params.id;
        const deletedUser = await UserModel.findByIdAndDelete(userId);      
        if (!deletedUser) { 
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}   

exports.getAllUsers = async(req, res)=>{
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}   