export function Header() {
  return (
    <header className="w-full text-center my-8 mx-auto">
      <h1 className="text-2xl text-white font-bold">App Mis Tareas</h1>
      <button
        className="p-2 font-bold bg-purple-900 text-white rounded-lg"
        type="button"
      >
        Crear Tarea +
      </button>
    </header>
  );
}
