import axios from "axios";

const apiTasks = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//End-point crear una nueva tarea
export const createTask = async (task) => {
  try {
    const response = apiTasks.post("/tasks", task);
    return response.data;
  } catch (error) {
    console.error("Error creando tarea: ", error);
    throw error;
  }
};

//End-point obtener tareas
export const getAllTasks = async () => {
  try {
    const response = apiTasks.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas: ", error);
    throw error;
  }
};
