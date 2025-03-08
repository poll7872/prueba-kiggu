import { formatDate } from "../helpers.js";
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

  //Método para actualizar una tarea
  updateTask(id, title, description, categories) {
    try {
      if (!tasks[id]) {
        throw new Error("Tarea no encontrada");
      }

      //Nueva instancia de task para aplicar validaciones
      const updatedTask = new Task(
        id,
        title || tasks[id].title,
        description || tasks[id].description,
        tasks[id].state,
        categories || tasks[id].categories,
      );

      //Mantener el valor de fecha de creación
      updatedTask.createdAt = tasks[id].createdAt;

      //Actualizar el campo de updatedAt
      updatedTask.updatedAt = formatDate(new Date());

      tasks[id] = updatedTask;
      return updatedTask;
    } catch (error) {
      throw new Error(`Error al actualizar tarea: ${error.message}`);
    }
  }

  //Método para actualizar solo el state en task
  updateTaskState(id, newState) {
    try {
      if (!tasks[id]) {
        throw new Error("Tarea no encontrada");
      }

      tasks[id].state = newState;
      //Actualizar el campo de updatedAt
      tasks[id].updatedAt = formatDate(new Date());

      return tasks[id];
    } catch (error) {
      throw new Error(`Error al actualizar tarea: ${error.message}`);
    }
  }

  //Método eliminar tarea
  deleteTask(id) {
    try {
      if (!tasks[id]) {
        throw new Error("Tarea no encontrada");
      }

      delete tasks[id];
      return true;
    } catch (error) {
      throw new Error(`Error al eliminar la tarea: ${error.message}`);
    }
  }
}
