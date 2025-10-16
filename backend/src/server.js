import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();

connectDB();

const app = express();
const PORT = 3000;
const api = process.env.API_URL;

// cho phép nhận dữ liệu từ client gửi lên
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use(`${api}`, router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
