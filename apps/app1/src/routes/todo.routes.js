import express from 'express';
import { createTodo, deleteTodo, getAllTodos, updateTodo } from '../controllers/todo.controller.js';
import logger from '../middlewares/logger.middleware.js';
const todo = express.Router();

todo.get('/', logger, getAllTodos);
todo.post("/", createTodo);
todo.put("/:id", updateTodo);
todo.delete("/:id", deleteTodo);

export default todo;
