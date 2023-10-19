import mongoose from "mongoose"

const { Schema, model} = mongoose

const scoreSchema = new Schema({
    score: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    created: {
        type: Date,
        default: Date.now
    }
})

export default model("Score", scoreSchema)