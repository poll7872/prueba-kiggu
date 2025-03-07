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
  }
}
