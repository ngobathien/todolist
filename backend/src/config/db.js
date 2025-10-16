import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Kết nối thành công");
    })
    .catch((err) => {
      console.error("Lỗi kết nối:", err);
    });
};

export default connectDB;
