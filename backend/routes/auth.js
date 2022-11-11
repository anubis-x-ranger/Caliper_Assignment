import express from "express";
import User from '../models/User.js';
const authrouter = express.Router();


import bcrypt from "bcrypt";

//Register 

authrouter.post('/register',async (req,res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashPassword
        });
        const user = await newUser.save();
        console.log(user)
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})

//Login
authrouter.post('/login',async (req,res) => {
    try{
        const user = await User.findOne({email: req.body.email})
        !user && res.status(400).json("Wrong Credentials");

        const validated =await bcrypt.compare(req.body.password,user.password);
        !validated && res.status(422).json("Incorrect Password")

        const { password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});

export default authrouter;