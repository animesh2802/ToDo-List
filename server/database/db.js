import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE_NAME = process.env.DB_NAME; // Your database name

const Connection = () => {
  // Construct the MongoDB connection URI
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@localhost:27017/${DATABASE_NAME}?authSource=admin`;

  mongoose.set("strictQuery", false);

  // Connect to the MongoDB database
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Event listeners for database connection
  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting with the database ", error.message);
  });
};

export default Connection;
