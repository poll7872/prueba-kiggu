import "../src/styles/global.css";
import { CardTask } from "./components/CardTask";
import { Header } from "./components/Header";
import { useTasks } from "./context/TaskContext";

function App() {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <>
      <Header />
      <main className="w-9/12 mx-auto grid grid-cols-3 mt-8">
        {tasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </main>
    </>
  );
}

export default App;
