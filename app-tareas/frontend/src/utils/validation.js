export function validationTask(task) {
  const errors = {};

  //Validar el title
  if (!task.title.trim()) {
    errors.title = "El titulo es obligatorio";
  }

  //Validar description
  if (!task.description.trim()) {
    errors.description = "La descrición es obligatoria";
  } else if (task.description.length < 10) {
    errors.description = "La descripción debe tener más de 10 caracteres";
  }

  //Validar categories
  if (task.categories.length === 0) {
    errors.categories = "Debes agregar al menos una categoría";
  }

  return errors;
}
