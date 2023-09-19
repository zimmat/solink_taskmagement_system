// Import DB config
import connectDB from "../config/ormconfig.js";
// Use environment variables
import dotenv from "dotenv";
import express from 'express';

dotenv.config();

// Create connection with DB
connectDB
const port = process.env.port || 3000;

const app = express();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
