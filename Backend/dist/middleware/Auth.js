import express, {} from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secret = process.env.JWT_SECRET;
export const auth = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        res.status(400).send("No user found");
    }
    // const decoded = jwt.verify(token,secret);
};
//# sourceMappingURL=Auth.js.map