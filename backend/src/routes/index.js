import express from "express";
import todoRoutes from "./todoRoutes.js";

const router = express.Router();
// api/todos
router.use("/todos", todoRoutes);

export default router;
