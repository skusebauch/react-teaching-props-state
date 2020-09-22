import React, { useState } from "react";

import "./App.css";
import Todo from "./Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([inputText, ...todo]);
    setInputText("");
  };

  return (
    <div className="App">
      <form>
        <h1>Todo App</h1>
        <input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        ></input>
        <button disabled={!inputText} type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
      {todo.map((todo) => (
        <Todo text={todo} key={Math.random().toString(36)} />
      ))}
    </div>
  );
}

export default App;
