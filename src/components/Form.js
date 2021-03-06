import React from "react";

const Form = ({ setteks, list, setlist, teks, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setteks(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setlist([
      ...list,
      { text: teks, completed: false, id: Math.random() * 1000 },
    ]);
    setteks("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={teks}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
