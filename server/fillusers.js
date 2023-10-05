import mongoose from "mongoose";
import dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import usersSchema from "./model/Users.js";


dotenv.config({
    path: path.join("./.env"),
  });

async function main(){
   try {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        writeConcern: {
          w: 'majority', // Set write concern mode to 'majority'
        },
      })
      const newUser = new usersSchema({
        userName: "admin",
        password: "admin",
        email: "admin@admin.com"
      })
      await newUser.save()
}
    catch (error) {
    console.error(error)
   }
}

main()