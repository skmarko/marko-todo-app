import express from "express";
import { getTodos, createTodo, deleteTodo } from "../controllers/todoController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getTodos);
router.post("/", protect, createTodo);
router.delete("/:id", protect, deleteTodo);

export default router;
