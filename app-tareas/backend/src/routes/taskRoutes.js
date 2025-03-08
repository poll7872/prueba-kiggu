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

//Route actualizar una tarea
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

//Route para actualizar state en tarea
router.put("/tasks/state/:id", (req, res) => {
  try {
    const { state } = req.body;
    const task = taskController.updateTaskState(parseInt(req.params.id), state);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Route eliminar una tarea
router.delete("/tasks/:id", (req, res) => {
  try {
    const successfully = taskController.deleteTask(parseInt(req.params.id));
    if (successfully) {
      //Codigo 204 con exito sin contenido
      res.status(200).json({ message: "Tarea eliminada con exito" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
