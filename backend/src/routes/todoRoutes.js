import express from "express";
import {
  createTodo,
  deletTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todoController.js";

const todoRoutes = express.Router();

todoRoutes.get("/", getAllTodos);

todoRoutes.post("/", createTodo);

todoRoutes.put("/:id", updateTodo);

todoRoutes.delete("/:id", deletTodo);

export default todoRoutes;
