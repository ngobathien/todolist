import express from "express";
import {
  createTodo,
  deletTodo,
  getAllTodos,
  search,
  updateTodo,
} from "../controllers/todoController.js";

const todoRoutes = express.Router();

// Tìm kiếm
todoRoutes.get("/search", search);

// Lấy tất cả todos
todoRoutes.get("/", getAllTodos);

// Thêm todo mới
todoRoutes.post("/", createTodo);

// Cập nhật todo
todoRoutes.put("/:id", updateTodo);

// Xóa todo
todoRoutes.delete("/:id", deletTodo);

export default todoRoutes;
