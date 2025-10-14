import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import connectDB from "./config/db.js";
dotenv.config();

connectDB();

const app = express();
const PORT = 3000;
const api = process.env.API_URL;

app.get(`${api}/hi`, (req, res) => {
  res.json({ message: "Xin chào các bạn" });
});
app.use(`${api}`, router);
// thêm việc cần làm
// app.post(`${api}`);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
