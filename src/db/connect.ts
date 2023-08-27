import "dotenv/config";
import mongoose from "mongoose";

const dbConnect = async () => {
  const connectionString = process.env.DATABASE_URL_V2;
  return mongoose.connect(connectionString);
};

export default dbConnect;
