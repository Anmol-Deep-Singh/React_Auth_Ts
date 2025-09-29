import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './db/connect.js';
import authRoutes from './routes/authRoutes.js';
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
connectDB();
app.use("/api/auth", authRoutes);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map