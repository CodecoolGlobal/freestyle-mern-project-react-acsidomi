import mongoose from "mongoose";

const {Schema, model} = mongoose;

const triviaSchema = new Schema( {
category: String,
question: String,
answer: String
})

export default model('Question', triviaSchema)