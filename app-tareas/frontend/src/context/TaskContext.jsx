import { createContext, useContext, useEffect, useState } from "react";
import { getAllTasks, updatedState } from "../utils/api";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getAllTasks();
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error("Error al obtener tareas: ", error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTaskInContext = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  };

  //Actualizar el state en backend y en el context
  const updateStateInContext = async (id, newState) => {
    try {
      //1. Actualiza en el backend
      await updatedState(id, newState);

      //2- Actualizar en el context
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, state: newState } : task,
        ),
      );
    } catch (error) {
      console.error("Error al actualizar state en tarea: ", error);
      throw error;
    }
  };

  const deleteTaskInContext = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        updateTaskInContext,
        deleteTaskInContext,
        updateStateInContext,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
