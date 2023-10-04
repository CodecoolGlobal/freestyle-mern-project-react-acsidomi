import  express from "express";
import mongoose from "mongoose";
import TriviaSchema from ".././model/TriviaSchema.js";
import dotenv from "dotenv";
import path from "path"

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
        console.log(questions)
        res.json(questions)
        
    } catch (error) {
        console.error("Error fetching category data:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router