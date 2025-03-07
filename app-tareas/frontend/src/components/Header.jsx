import { AddCircleFilled } from "@fluentui/react-icons";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="grid justify-items-center my-6 gap-3">
      <h1 className="text-2xl text-white font-bold">App Mis Tareas</h1>
      <Button icon={<AddCircleFilled className="text-xl" />}>
        Crear Tarea
      </Button>
    </header>
  );
}
