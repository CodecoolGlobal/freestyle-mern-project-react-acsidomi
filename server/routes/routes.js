import  express from "express";
import mongoose from "mongoose";

const router = express.Router()

router.get("/", async (req, res) => {
    const todos = await getTodos();
    res.send(todos);
});
