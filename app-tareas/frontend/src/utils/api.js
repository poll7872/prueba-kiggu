import axios from "axios";

const apiTasks = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//End-point crear una nueva tarea
export const createTask = async (task) => {
  try {
    const response = await apiTasks.post("/tasks", task);
    return response.data;
  } catch (error) {
    console.error("Error creando tarea: ", error);
    throw error;
  }
};

//End-point obtener tareas
export const getAllTasks = async () => {
  try {
    const response = await apiTasks.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas: ", error);
    throw error;
  }
};

//End-point para actualiar tarea
export const updatedTask = async (id, task) => {
  try {
    const response = await apiTasks.put(`/tasks/${id}`, task);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar tarea: ", error);
    throw error;
  }
};

//End-point para actualizar state en tarea
export const updatedState = async (id, state) => {
  try {
    const response = await apiTasks.put(`/tasks/${id}`, state);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar state en tarea: ", error);
    throw error;
  }
};

//End-point para eliminar tarea
export const deleteTask = async (id) => {
  try {
    const response = await apiTasks.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar tarea: ", error);
    throw error;
  }
};
