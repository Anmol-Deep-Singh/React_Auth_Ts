import {} from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import userModel from '../models/User.js';
import dotenv from 'dotenv';
import { z } from 'zod';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const signup = async (req, res) => {
    try {
        const requiredBody = z.object({
            name: z.string({ message: "Invalid name format" }),
            email: z.string().email({ message: "Invalid email address" }),
            password: z
                .string()
                .min(6, { message: "Password must be at least 6 characters long" })
                .max(50, { message: "Password must be at most 50 characters long" }),
        });
        const parsed = requiredBody.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Incorrect validations",
                error: parsed.error
            });
        }
        const { name, email, password } = req.body;
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        });
        const token = jwt.sign({ email: email }, JWT_SECRET);
        return res.status(200).send({
            message: "Account has been created",
            token: token
        });
    }
    catch (e) {
        const error = `Server crased ${e}`;
        return res.status(500).json({ message: error });
    }
};
const signin = async (req, res) => {
    const { email, password } = req.body;
    const existuser = await userModel.findOne({
        email: email
    });
    if (!existuser) {
        return res.status(400).send({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, existuser.password);
    if (!isMatch) {
        return res.status(400).send({ message: "Invalid Password" });
    }
    const token = jwt.sign({ email: email }, JWT_SECRET);
    res.status(200).send({
        message: "Signed in successfully",
        token: token
    });
};
export { signin, signup };
//# sourceMappingURL=authController.js.map