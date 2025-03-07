import { AddCircleFilled } from "@fluentui/react-icons";
import { Button } from "./Button";
import { useModal } from "../hooks/useModal";
import { Modal } from "./Modal";
import { FormAddTask } from "./forms/FormAddTask";

export function Header() {
  const addTaskModal = useModal();
  return (
    <header className="grid justify-items-center my-6 gap-3">
      <h1 className="text-2xl text-white font-bold">App Mis Tareas</h1>
      <Button
        onClick={addTaskModal.openModal}
        icon={<AddCircleFilled className="text-xl" />}
      >
        Crear Tarea
      </Button>

      {/*Modal Agregar Tarea form*/}
      <Modal isOpen={addTaskModal.isOpen} onClose={addTaskModal.closeModal}>
        <FormAddTask />
      </Modal>
    </header>
  );
}
