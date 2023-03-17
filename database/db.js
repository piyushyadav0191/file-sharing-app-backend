import mongoose from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const DBConnection = () => {
  try {
    mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
    console.log("Database is Connected");
  } catch (error) {
    console.error(error, "error while connecting database");
  }
};

export default DBConnection;
