import "./List.css";
import React from "react";

const List = ({ todos, setTodos, setToast, onToast }) => {
  const deleteTodo = (e) => {
    const target = +e.target.dataset.num;
    const newtodos = todos.filter((todo) => todo.num !== target);
    setTodos(newtodos);
    setToast("삭제되었습니다.");
    onToast();
  };

  const changeStatus = (target) => {
    setTodos(
      todos.map((todo) =>
        todo.num === target ? { ...todo, done: !todo.done } : todo
      )
    );
    setToast("상태가 변경되었습니다.");
    onToast();
  };

  const todoList = todos.map((todo) => (
    <div key={todo.num}>
      <input
        type="checkbox"
        onClick={changeStatus.bind(this, todo.num)}
      ></input>
      <span style={todo.done ? { textDecoration: "line-through" } : {}}>
        {todo.what}
      </span>
      <button
        type="submit"
        className="xbtn"
        data-num={todo.num}
        onClick={deleteTodo}
      >
        X
      </button>
    </div>
  ));

  return <>{todoList}</>;
};

export default List;
