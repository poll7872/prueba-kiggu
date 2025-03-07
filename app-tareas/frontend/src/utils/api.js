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
  }
};
