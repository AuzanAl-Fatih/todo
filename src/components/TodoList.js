import React from "react";
import Todo from "./Todo";
const TodoList = ({ list, setlist, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            list={list}
            setlist={setlist}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
