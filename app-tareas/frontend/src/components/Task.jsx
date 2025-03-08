export function Task({ task }) {
  return (
    <article>
      <header>
        <h1 className="text-center text-xl text-purple-600 font-bold">
          {task.title}
        </h1>
      </header>

      <section className="mt-2 mb-4">
        <h2 className="font-bold">Descripción</h2>
        <p className="whitespace-pre-wrap">{task.description}</p>
      </section>

      <section>
        <h2 className="font-bold">Categorías</h2>
        <ul className="flex gap-2 mb-4 mt-2">
          {task.categories.map((category, index) => (
            <li key={index} className="bg-purple-600 text-white p-1 rounded-lg">
              {category}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
