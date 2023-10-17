import mongoose from "mongoose";

const {Schema, model} = mongoose;

const usersSchema = new Schema({
    userName: String,
    password: String,
    email: String,
    created: {type:Date,default:Date.now}
    
})

export default model('Users', usersSchema);