import mongoose from "mongoose";

const {Schema, model} = mongoose;

const usersSchema = new Schema({
    userName: String,
    password: String,
    email: String
})

export default model('Users', usersSchema);