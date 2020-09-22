import React from "react";
import "./Todo.css";

const Todo = (props) => (
  <div className="todo__card">
    <h1>{props.text}</h1>
  </div>
);

export default Todo;
