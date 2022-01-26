import "./Input.css";
import { useState, useRef } from "react";

const Input = ({ todos, setTodos, setToast, onToast, hash }) => {
  const inputItem = useRef();
  const watchingInput = (e) => {
    inputItem.current.value = e.target.value;
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputItem.current.value) {
      setToast("할 일을 입력하세요!");
      onToast();
    } else {
      setTodos([
        ...todos,
        { num: hash.current, what: inputItem.current.value, status: false },
      ]);
      hash.current++;
      setToast("추가되었습니다.");
      onToast();
    }
    inputItem.current.value = "";
  };

  return (
    <div className="inputBox">
      <form action="">
        <input type="text" onChange={watchingInput} ref={inputItem}></input>
        <button className="submitBtn" onClick={addTodo}>
          제출
        </button>
      </form>
    </div>
  );
};

export default Input;
