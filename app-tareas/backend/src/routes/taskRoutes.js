import express from "express";
import { TaskController } from "../controllers/taskController.js";

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
  res.status(200).json(tasks);
});

//Route actualizar una nota
router.put("/tasks/:id", (req, res) => {
  try {
    const { title, description, state, categories } = req.body;
    const task = taskController.updateTask(
      parseInt(req.params.id),
      title,
      description,
      state,
      categories,
    );
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
