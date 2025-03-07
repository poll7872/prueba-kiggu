import { Task } from "../models/Task";

//Datos en memoria (simulación de BD)
let tasks = {};
let nextTaskId = 1;

export class TaskController {
  //Método para crear una nueva tarea
  createTask(title, description, categories) {
    const id = nextTaskId++;
    const task = new Task(
      id,
      title,
      description,
      (status = "To Do"),
      categories,
    );
    tasks[id] = task;
    return task;
  }
}
