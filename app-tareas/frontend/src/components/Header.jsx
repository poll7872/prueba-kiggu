import { Button } from "./Button";

export function Header() {
  return (
    <header className="w-full text-center my-8 mx-auto">
      <h1 className="text-2xl text-white font-bold">App Mis Tareas</h1>
      <Button>Crear Tarea</Button>
    </header>
  );
}
