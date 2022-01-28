import "./App.scss";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <Header name="Cathy" />
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
