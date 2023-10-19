import  express from "express";
import mongoose from "mongoose";
import TriviaSchema from ".././model/TriviaSchema.js";
import Users from ".././model/Users.js";
import Score from "../model/Score.js";
import dotenv from "dotenv";
import path from "path";
import bcrypt from "bcrypt";
const saltRounds = 10;

dotenv.config({
    path: path.join('./.env')
})

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: 'majority', // Set write concern mode to 'majority'
    },
})

const router = express.Router()

router.get("/:category", async (req, res) => {
    try {
        const questions = await TriviaSchema.find({category: req.params.category})
        if(!questions){
            return res.status(404).json({message: "Category not found"})
        }
        res.json(questions)
        
    } catch (error) {
        console.error("Error fetching category data:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/login/:username", async (req,res) => {
    try {
        const user = await Users.findOne({userName: req.params.username})
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }
        res.json(user)
    } catch (error) {
        console.error("Error fetching category data:", error);
        res.status(500).json({ message: "Server error" });
    }
})

router.post("/addNew", async (req, res) =>{
    try{
        const {category, question, answer} = req.body;
        const newQuestion = new TriviaSchema({
            category,
            question,
            answer
        })
        const savedQuestion = await newQuestion.save()
        res.json(savedQuestion)
    }
    catch (error){
        console.error("Cannot save the new data",error)
        res.status(500).json({ message: "Server error" });
    }
})

router.delete("/admin/delete/:id", async (req, res) =>{
    try {
        const deleteQuestion = await TriviaSchema.findByIdAndDelete({_id: req.params.id})
        if(!deleteQuestion){
            return res.status(404).json({message: "Question not found"})
        }
        res.json(deleteQuestion)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" });
        
    }
})

router.patch("/admin/edit/:id", async (req, res) =>{
    try{

        const updatedQuestion = await TriviaSchema.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!updatedQuestion){
            return res.status(404).json({message: "Question not found"})
        }
        res.json(updatedQuestion)
    }
    catch(err){
        console.error(err)
        res.status(500).json({ message: "Server error" });
    }
})

router.patch("/user/profile/edit/:id", async (req, res) =>{
    try{
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
        const updatedPassword = await Users.findByIdAndUpdate(req.params.id, {password:hashedPassword}, {new:true})
        res.json(updatedPassword)
    }
    catch(err){
        console.error(err)
        res.status(500).json({ message: "Server error" });
    }
})

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await Users.findOne({ $or: [{ userName: username }, { email: email }] })
        if (existingUser) {
            return res.status(400).json({ message: "Username or email already in use" });
        }
        const newUser = new Users({
            userName: username,
            email,
            password: bcrypt.hashSync(password, saltRounds) 
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); 
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/users/leaderboard", async (req,res) => {
    try {
        const scores = await Score.find().sort({score: "desc"}).limit(10).populate("user")
        if (!scores) {
            return res.status(404).json({message: "Score not found"})
        }
        res.json(scores)
    } catch (error) {
        console.log(error)
    }
})

router.post("/user/score", async (req, res) => {
    try {
        const { score, user} = req.body

        const newScore = new Score({
            score: score,
            user: user
        })
        const savedScore = await newScore.save()
        res.status(201).json(savedScore)
    } catch (error) {
        console.error(error)
    }
})


export default router