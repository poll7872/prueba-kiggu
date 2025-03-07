import { Task } from "../models/Task.js";

//Objeto en tiempo de ejecución (simulación de BD)
let tasks = {};
let countTaskId = 1;

export class TaskController {
  //Método para crear una nueva tarea
  createTask(title, description, state = "To Do", categories) {
    try {
      const id = countTaskId++;
      const task = new Task(id, title, description, state, categories);
      tasks[id] = task;
      return task;
    } catch (error) {
      throw new Error(`Error al crear la tarea: ${error.message}`);
    }
  }

  //Método para obtener las notas
  getAllTasks() {
    return Object.values(tasks);
  }
}
