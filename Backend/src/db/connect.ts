import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.MONGO_URL as string;

export const connectDB = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("Database is connected");
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
} 