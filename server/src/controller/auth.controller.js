import mongoose from 'mongoose';
import userModel from '../models/user.model.js';
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
res.cookie('token',token,{httpOnly:true,secure:true,sameSite:'strict'});

res.status(201).send({message:'User registered successfully', token});

};