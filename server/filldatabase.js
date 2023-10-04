import mongoose from "mongoose";
import dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import triviaSchema from "./model/TriviaSchema.js";

dotenv.config({
  path: path.join("./.env"),
});

const categories = ["artliterature","language","sciencenature","general",
"fooddrink","peopleplaces","geography","historyholidays","entertainment",
"toysgames","music","mathematics","religionmythology","sportsleisure"]
async function main(category) {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        writeConcern: {
          w: 'majority', // Set write concern mode to 'majority'
        },
      })
    const response = await fetch(`https://api.api-ninjas.com/v1/trivia?category=${category}&limit=30`, {
      method: "GET",
      headers: { "X-Api-Key": "pe8bDjzt2qs1AeJNbzukUw==sXVqA6FU8t4IBEFG" },
      contentType: "application/json",
    });
    const result = await response.json();
    let allData = await triviaSchema.create(result)

    //await mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
}

categories.forEach((category) =>{
  main(category)
})


