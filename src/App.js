import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [lists, setLists] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="main-container">
      <Header />
      <Form input={input} setInput={setInput} setLists={setLists} />
      <TodoList lists={lists} setLists={setLists} />
    </div>
  );
}

export default App;
