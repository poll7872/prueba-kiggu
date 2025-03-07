import { useState } from "react";
import { Button } from "../Button";
import { createTask } from "../../utils/api";

export function FormAddTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    categories: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTask(task);
      //Limpiar form
      setTask({
        title: "",
        description: "",
        categories: [],
      });
    } catch (error) {
      console.error("Error al crear tarea: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <legend className="text-2xl font-bold text-center mb-2">
        Crear Tarea
      </legend>

      <div className="grid gap-1 mb-4 mt-2">
        <label className="font-bold" htmlFor="title">
          Titulo:
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Titulo de la nota..."
          className="p-2 rounded-lg border-b-4 border-purple-300 outline-none focus:border-purple-800"
          value={task.title}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-1 mb-4 mt-2">
        <label className="font-bold" htmlFor="description">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Contenido de la nota..."
          className="p-2 rounded-lg border-b-4 border-t-1 border-l-1 border-r-1 border-purple-300 outline-none focus:border-purple-800"
          rows="6"
          value={task.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="grid gap-1 mb-4 mt-2">
        <label className="font-bold" htmlFor="categories">
          Categorias
        </label>
        <input
          id="categories"
          name="categories"
          type="text"
          placeholder="Ej: personal, hogar, hobbie"
          className="p-2 rounded-lg border-b-4 border-purple-300 outline-none focus:border-purple-800"
          value={task.categories}
          onChange={handleChange}
        />
        <p className="text-xs">Nota: usa una coma despues de cada palabra</p>
      </div>

      <Button type="submit" size="large">
        Crear Tarea
      </Button>
    </form>
  );
}
