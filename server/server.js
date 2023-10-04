import mongoose from "mongoose";
import express  from "express";
import dotenv from "dotenv"
import path from "path";
import  router  from "./routes/routes.js";

const app = express()
app.use(express.json())

dotenv.config({
    path: path.join('./.env')
})
mongoose.connect(process.env.MONGO_URL);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    next();
})

app.use("/api/quiz",router)
app.get('/', (req,res) => {
    console.log("router works")
    res.json({})
})

app.listen(4000, ()=> {
    console.log("app listening on port 4000")
})