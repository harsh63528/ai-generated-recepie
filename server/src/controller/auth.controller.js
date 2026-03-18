import mongoose from 'mongoose';
import userModel from '../models/user.model.js';
import TokenBlacklist from '../models/tokenBlacklist.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function registerUser(req, res) {
    // Registration logic here
   const {name,email,password}=req.body;
if(!name||!email||!password) {
        return res.status(400).send('All fields are required');
    }

const existingUser= await userModel.findOne({email});
if(existingUser) {
    return res.status(400).send('User already exists');
}
const hashedPassword=await bcrypt.hash(password,10);

const newUser=new userModel({
    name,
    email,
    password:hashedPassword
});

await newUser.save();
const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
res.cookie('token',token,{httpOnly:true,secure:process.env.NODE_ENV === 'production'?true:false,sameSite:'strict'});

res.status(201).send({ user: { name: newUser.name, email: newUser.email }});

};

export async function loginUser(req, res) {
    // Login logic here
    const {email,password}=req.body;
if(!email||!password) {
        return res.status(400).send('All fields are required');
    }
const user=await userModel.findOne({email});
if(!user) {
    return res.status(400).send('Invalid credentials');
}
const isMatch=await bcrypt.compare(password,user.password);
if(!isMatch) {
    return res.status(400).send('Invalid credentials');
}
const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
res.cookie('token',token,{httpOnly:true,secure:process.env.NODE_ENV === 'production'?true:false,sameSite:'strict'});
res.status(200).send({ user: { name: user.name, email: user.email } });

}

export async function logoutUser(req, res) {
    console.log(req.cookies);
    const {token} = req.cookies;
    if (!token) {
        return res.status(400).send('No token provided');
    }
    await TokenBlacklist.create({ token });
    res.clearCookie('token');
    res.status(200).send('User logged out successfully');
}

export async function getProfile(req, res) {
    const userId = req.user._id;
    const user = await userModel.findById(userId).select('-password');
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.status(200).send(user);
}

