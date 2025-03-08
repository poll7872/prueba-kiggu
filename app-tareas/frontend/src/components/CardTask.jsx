import {
  DeleteFilled,
  NoteEditFilled,
  NoteFilled,
  StatusFilled,
} from "@fluentui/react-icons";
import { Modal } from "./Modal";
import { FormUpdateTask } from "./forms/FormUpdateTask";
import { useModal } from "../hooks/useModal";
import { DeleteTask } from "./DeleteTask";
import { useTasks } from "../context/TaskContext";
import { Task } from "./Task";

export function CardTask({ task }) {
  const updateTaskModal = useModal();
  const DeleteTaskModal = useModal();
  const taskModal = useModal();
  const { updateStateInContext } = useTasks();

  //Estilos de acuerdo al state
  const statusColors = {
    "To Do": "text-red-500",
    "In Progress": "text-yellow-500",
    Done: "text-green-500",
  };

  const handleUpdateState = async () => {
    try {
      //ALterna entre las opciones de state
      const nextState =
        task.state === "To Do"
          ? "In Progress"
          : task.state === "In Progress"
            ? "Done"
            : "To Do";
      await updateStateInContext(task.id, nextState);
    } catch (error) {
      console.error("Error al actualizar estado en tarea: ", error);
    }
  };

  return (
    <>
      <article className="bg-white w-80 rounded-lg p-1 hover:border border-purple-800 hover:shadow-2xl hover:shadow-purple-900/50">
        <div className="flex items-center">
          <NoteFilled
            onClick={taskModal.openModal}
            className="text-7xl cursor-pointer text-purple-600"
          />
          <div className="font-bold">
            <h2 className="text-base">{task.title}</h2>
            <p className="text-xs">Ultima modificación: {task.updatedAt}</p>
          </div>
        </div>
        <div className="flex justify-between ml-2">
          <span className="font-bold text-xs">
            <StatusFilled
              className={`${statusColors[task.state]} text-2xl cursor-pointer`}
              onClick={handleUpdateState}
            />

            {task.state}
          </span>
          <div className="flex gap-2">
            <NoteEditFilled
              onClick={updateTaskModal.openModal}
              className="text-blue-500 text-2xl cursor-pointer"
            />
            <DeleteFilled
              onClick={DeleteTaskModal.openModal}
              className="text-red-500 text-2xl cursor-pointer"
            />
          </div>
        </div>
      </article>

      {/*MODALS*/}
      <Modal
        isOpen={updateTaskModal.isOpen}
        onClose={updateTaskModal.closeModal}
      >
        <FormUpdateTask taskToUpdate={task} />
      </Modal>

      <Modal
        isOpen={DeleteTaskModal.isOpen}
        onClose={DeleteTaskModal.closeModal}
      >
        <DeleteTask id={task.id} onClose={DeleteTaskModal.closeModal} />
      </Modal>

      <Modal isOpen={taskModal.isOpen} onClose={taskModal.closeModal}>
        <Task task={task} />
      </Modal>
    </>
  );
}
