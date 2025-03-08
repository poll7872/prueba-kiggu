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
    secondary:
      "bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
  };

  //Tamaños button
  const sizeStyle = {
    medium: "px-4 py-2 text-base",
    large: "px-4 py-2 text-base w-full",
  };

  //Combinar los Estilos
  const buttonStyles = `${baseStyles} ${colorStyles[color]} ${sizeStyle[size]}`;

  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {children}
      {/* Icono*/}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
