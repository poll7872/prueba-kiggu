# Aplicación de Tareas

## Descripción

La **Aplicación de Tareas** es una herramienta diseñada para ayudar a los usuarios a gestionar sus tareas de manera eficiente. Con esta aplicación, los usuarios pueden agregar, eliminar, actualizar y cambiar el estado de sus tareas a medida que avanzan en su realización. Es una solución perfecta para organizar tus actividades diarias, proyectos o cualquier tipo de tarea que necesites recordar.

## Características Principales

- **CRUD de Tareas**:
  - **Crear**: Agrega nuevas tareas con un título, descripción, estado y categorías.
  - **Leer**: Visualiza todas las tareas en una lista organizada.
  - **Actualizar**: Modifica el título, descripción o categorías de una tarea existente.
  - **Eliminar**: Elimina tareas que ya no necesites.
- **Cambio de Estado**: Actualiza el estado de las tareas entre "To Do", "In Progress" y "Done".
- **Categorías**: Asigna categorías a las tareas para una mejor organización.
- **Interfaz Intuitiva**: Diseño moderno y fácil de usar, con iconos y colores que facilitan la identificación del estado de cada tarea.

## Tecnologías Utilizadas

### Frontend

- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Axios**: Cliente HTTP para realizar solicitudes a la API del backend.
- **Tailwind CSS**: Framework de CSS para diseñar la interfaz de manera rápida y eficiente.
- **Fluenticons**: Librería de iconos para una experiencia visual más atractiva.

### Backend

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir la API RESTful.
- **CORS**: Middleware para permitir solicitudes entre dominios.

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/poll7872/prueba-kiggu
   cd prueba-kiggu
   ```
2. **Instala las dependencias del backend**:
   ```bash
   cd app-tareas/backend
   npm install
   ```
3. **Instala las dependencias del frontend**:
   ```bash
   cd ../frontend
   npm install
   ```
4. **Inicia el servidor backend**: En la ruta app-tareas/backend
   ```bash
   npm start
   ```
5. **Inicia la aplicación frontend**: En la ruta app-tareas/frontend
   ```bash
   npm run dev
   ```
6. **Accede a la aplicación**:
   - Abre tu navegador y visita `http://localhost:5173`

## Estructura del Proyecto

- **`app-tareas/backend`**: Contiene el código del servidor (API RESTful).
- **`app-tareas/frontend`**: Contiene el código de la interfaz de usuario (React).

## Funcionamiento del Proyecto

Puedes ver una demostración del funcionamiento de la aplicación en el siguiente video:

[![Ver Video](https://i.ibb.co/rf71D2vz/pagina-principal.png)](https://vimeo.com/1063906172)
