import { createContext, useContext, useEffect, useState } from "react";
import { getAllTasks } from "../utils/api";

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

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
