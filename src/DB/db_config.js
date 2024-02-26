import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Data base is Connected at :${connect.connection.host}`);
  } catch (error) {
    console.error(`Data base connection Failed:${error}`);
  }
};

export default dbConnect;
