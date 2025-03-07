export function Button({
  type = "button", //Por defecto será button
  color = "primary",
  size = "medium",
  onClick,
  children,
  icon,
}) {
  //Estilos base dle button
  const baseStyles =
    "font-bold rounded-lg transition-all duration-200 focus:outline-none flex items-center justify-center cursor-pointer";

  //Estilos de color
  const colorStyles = {
    primary:
      "bg-purple-900 hover:bg-purple-800 text-white focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50",
  };

  //Tamaños button
  const sizeStyle = {
    small: "p-3 text-sm",
    medium: "px-4 py-2 text-base",
  };

  //Combinar los Estilos
  const buttonStyles = `${baseStyles} ${colorStyles[color]} ${sizeStyle[size]}`;

  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {children}
      {/* Icono*/}
      <span className="ml-2">{icon}</span>
    </button>
  );
}
