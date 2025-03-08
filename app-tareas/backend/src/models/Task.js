//Formatear la fecha
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0"); // Día con dos digitos
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mes con dos ditios
  const year = date.getFullYear();

  return `${day}/${month}/${year}`; // Formato DD/MM/YYYY
}

export class Task {
  constructor(id, title, description, state = "To Do", categories) {
    //Validar que el titulo no este vacio
    if (!title || title.trim === "") {
      throw new Error("El titulo no puede estar vacio");
    }

    //Solo se permite tres estados "To Do", "In Progress", "Done"
    const validStatus = ["To Do", "In Progress", "Done"];
    if (!validStatus.includes(state)) {
      throw new Error("El estado debe de ser: To Do, In Progress o Done");
    }

    this.id = id;
    this.title = title;
    this.description = description;
    this.state = state;
    this.categories = categories; //Array con strings de categories
    const currentDate = new Date();
    this.createdAt = formatDate(currentDate);
    this.updatedAt = formatDate(currentDate);
  }
}
