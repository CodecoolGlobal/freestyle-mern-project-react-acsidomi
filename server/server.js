import mongoose from "mongoose";
import express  from "express";
import dotenv from "dotenv"
import path from "path";
const app = express()
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    next();
})

dotenv.config({
    path: path.join('./.env')
})

mongoose.connect(process.env.MONGO_URL);