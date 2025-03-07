import express from "express";
import { TaskController } from "../controllers/taskController";

const router = express.Router();
const taskController = new TaskController();

//Route crear una nueva tarea
router.post("/tasks", (req, res) => {
  try {
    const { title, description, state, categories } = req.body;
    const task = taskController.createTask(
      title,
      description,
      state,
      categories,
    );
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Route obtener todas la tareas
router.get("/tasks", (req, res) => {
  const tasks = taskController.getAllTasks();
  res.status(201).json(tasks);
});

export default router;
