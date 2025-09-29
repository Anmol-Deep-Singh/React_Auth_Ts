import { type NextFunction,type Request,type Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import user from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

const signup = async (req:Request , res:Response) =>{
    try {
        const {email,password} = req.body;
        const exist = await user.findOne({email});
        if(exist){
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = await user.create({
            email: email,
            password: hashedPassword
        })
        const token = jwt.sign({email:email},JWT_SECRET);
        res.status(200).send({
            message:"User has been signed in",
            token:token        
        })        
    } catch (e) {
        const error = `Server crased ${e}`;
        return res.status(500).json({ message: error });
    }
}

const signin = async(req:Request , res:Response) =>{
    const {email,password} = req.body;
    const existuser = await user.findOne({
        email: email
    }) 
    if(!existuser){
        return res.status(400).send({message: "User does not exist"});
    }
    const isMatch = await bcrypt.compare(password,existuser.password);
    if(!isMatch){
        return res.status(400).send({message: "Invalid Password"});
    }
    const token = jwt.sign({email:email},JWT_SECRET);

    res.status(200).send({
        message:"User has been signed in",
        token:token        
    })    
}

export {signin,signup}