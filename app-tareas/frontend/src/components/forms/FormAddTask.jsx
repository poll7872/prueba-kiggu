import { useState } from "react";
import { Button } from "../Button";
import { createTask } from "../../utils/api";
import { DismissCircleFilled } from "@fluentui/react-icons";
import { useTasks } from "../../context/TaskContext";
import { validationTask } from "../../utils/validation";

export function FormAddTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    categories: [],
  });
  const [categoryInput, setCategoryInput] = useState("");
  const { addTask } = useTasks();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validar campos antes de enviar
    const validationErrors = validationTask(task);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const newTask = await createTask(task);
      addTask(newTask);
      //Limpiar form
      setTask({
        title: "",
        description: "",
        categories: [],
      });
      setCategoryInput("");
      //Limpiar errors
      setErrors({});
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

  const handleCategoryInput = (e) => {
    const { value } = e.target;

    // Mantiene lo que el usuario escrie
    setCategoryInput(value);

    // Si el valor contiene una coma, procesa las categorías
    if (value.includes(",")) {
      // Se divide y limpia la categoría ingresada
      const newCategories = value
        .split(",")
        .map((category) => category.trim())
        .filter((category) => category !== ""); // Ignora inputs vacíos

      // Actualiza las categorías en el estado de la tarea
      setTask((prev) => ({
        ...prev,
        categories: [...new Set([...prev.categories, ...newCategories])], // Evita categorías duplicadas
      }));

      // Limpia el input solo después de procesar las categorías
      setCategoryInput("");
    }
  };

  const handleRemoveCategory = (index) => {
    setTask((prev) => ({
      ...prev,
      categories: prev.categories.filter((_, i) => i !== index),
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend className="text-xl text-purple-500 font-bold text-center mb-2">
        Crear Tarea
      </legend>

      <div className="grid gap-1 mb-4 mt-2">
        <label className="font-bold text-sm" htmlFor="title">
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
        {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
      </div>

      <div className="grid gap-1 mb-4 mt-2">
        <label className="font-bold text-sm" htmlFor="description">
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
        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description}</p>
        )}
      </div>

      <div className="grid gap-1 mb-4 mt-2">
        <label className="font-bold text-sm" htmlFor="categories">
          Categorias
        </label>
        <input
          id="categories"
          name="categories"
          type="text"
          placeholder="Ej: personal, hogar, hobbie"
          className="p-2 rounded-lg border-b-4 border-purple-300 outline-none focus:border-purple-800"
          value={categoryInput}
          onChange={handleCategoryInput}
        />
        <p className="text-xs">Nota: usa una coma despues de cada palabra</p>
        {errors.categories && (
          <p className="text-red-500 text-xs">{errors.categories}</p>
        )}
      </div>

      {/* Etiquetas de categories */}
      <div className="flex gap-2 my-2">
        {task.categories.map((category, index) => (
          <span
            className="bg-purple-600 text-white p-1 rounded-lg text-sm"
            key={index}
          >
            {category}
            <DismissCircleFilled
              className="ml-1 text-sm cursor-pointer"
              onClick={() => handleRemoveCategory(index)}
            />
          </span>
        ))}
      </div>

      <Button type="submit" size="large">
        Crear Tarea
      </Button>
    </form>
  );
}
