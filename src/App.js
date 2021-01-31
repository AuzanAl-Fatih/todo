import React, { useState, useEffect } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  return (
    <div className="App">
      <header>
        <h1>Ahmad's Todo List</h1>
      </header>
      <Form
        teks={inputText}
        list={todos}
        setlist={setTodos}
        setteks={setInputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList setlist={setTodos} list={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
