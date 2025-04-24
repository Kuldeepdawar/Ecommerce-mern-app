// step 1 import mongoose for connectivity with Mongodb
import mongoose from "mongoose";

// create a connectiontion
const connectDB = async () => {
  // this is for calling make connection
  mongoose.connection.on("connected", () => {
    console.log("DB connected");
  });
  // step 2 use mongoDB.connected with .env
  await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`);
};

// now export connectDB for other files
export default connectDB;
