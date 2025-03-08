import {
  DeleteFilled,
  NoteEditFilled,
  NoteFilled,
  StatusFilled,
} from "@fluentui/react-icons";
import { Modal } from "./Modal";
import { FormUpdateTask } from "./forms/FormUpdateTask";
import { useModal } from "../hooks/useModal";

export function CardTask({ task }) {
  const addTaskModal = useModal();

  return (
    <>
      <article className="bg-white w-80 rounded-lg p-1 hover:border border-purple-800 hover:shadow-2xl hover:shadow-purple-900/50">
        <div className="flex items-center">
          <NoteFilled className="text-7xl cursor-pointer text-purple-600" />
          <div className="font-bold">
            <h2 className="text-base">{task.title}</h2>
            <p className="text-xs">Ultima modificación: {task.updatedAt}</p>
          </div>
        </div>
        <div className="flex justify-between ml-2">
          <span className="font-bold text-xs">
            <StatusFilled className="text-red-500 text-2xl cursor-pointer" />
            {task.state}
          </span>
          <div className="flex gap-2">
            <NoteEditFilled
              onClick={addTaskModal.openModal}
              className="text-blue-500 text-2xl cursor-pointer"
            />
            <DeleteFilled className="text-red-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </article>

      {/*MODALS*/}
      <Modal isOpen={addTaskModal.isOpen} onClose={addTaskModal.closeModal}>
        <FormUpdateTask taskToUpdate={task} />
      </Modal>
    </>
  );
}
