import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Kết nối thành công");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

export default connectDB;
