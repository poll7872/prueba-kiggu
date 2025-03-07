import "../src/styles/global.css";
import { CardTask } from "./components/CardTask";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="w-9/12 mx-auto grid grid-cols-3 mt-8">
        <CardTask />
        <CardTask />
        <CardTask />
      </main>
    </>
  );
}

export default App;
