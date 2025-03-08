//Formatear la fecha
export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0"); // Día con dos digitos
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mes con dos ditios
  const year = date.getFullYear();

  return `${day}/${month}/${year}`; // Formato DD/MM/YYYY
}
