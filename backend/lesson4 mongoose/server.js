const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        min:3,
        max:30
    },
    age: {
        type:Number,
        min:0
    },
    email: {
        type:String,
        required:true,
        unique:true
    }
});

const User = mongoose.model('User', userSchema);

app.get('/create-user', async (req, res) => {
    try {
        const newUser = new User({
            name: "Azizbek Aka",
            age: 21,
            email: "azizbek@example.com"
        });
        await newUser.save();
        res.status(201).send("User created successfully");
    } catch (error) {
        res.status(500).send("Error creating user");
    }
});

app.listen(process.env.PORT||4556,()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("mongodb connection successfully")
    })
    .catch((error)=>{
        console.error("Error: "+ error.message);
        
    })


    console.log(`Server is running on port ${process.env.PORT||4556}`);
})