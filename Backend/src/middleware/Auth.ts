import express, { type NextFunction,type Request,type Response } from 'express'

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.JWT_SECRET as string | undefined;

export const auth = async (req:Request,res:Response,next:NextFunction) =>{
        const token = req.headers.token;
    if(!token){
        res.status(400).send("No user found");
    }
    // const decoded = jwt.verify(token,secret);
}