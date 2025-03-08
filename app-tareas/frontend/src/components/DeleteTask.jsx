import { deleteTask } from "../utils/api";
import { Button } from "./Button";

export function DeleteTask({ id, onClose }) {
  const handleDeleteTask = async () => {
    try {
      await deleteTask(id);
      onClose();
    } catch (error) {
      console.error("Error al eliminar tarea: ", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 text-center">
        Eliminar Tarea
      </h2>
      <p className="text-center my-3">¿Estas seguro de eliminar está nota?</p>
      <div className="flex justify-center gap-4">
        <Button onClick={handleDeleteTask} color="danger">
          Si
        </Button>
        <Button onClick={onClose} color="secondary">
          No
        </Button>
      </div>
    </div>
  );
}
