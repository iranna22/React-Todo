import React, { useState } from "react";
import "./ToDoForm.css";

function ToDoForm(props) {
  const [inputText, setInputText] = useState("");
  const clickHandle = (e) => {
    props.addList(inputText);
    setInputText("");
  };

  const onChangeHandle = (e) => {
    setInputText(e.target.value);
  };
  const keyHandle = (e) => {
    if (e.key === "Enter") {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="todo-form">
      <div className="form-container">
        <h2>TODO</h2>
        <input
          type="text"
          placeholder={"Enter a Task"}
          value={inputText}
          onChange={onChangeHandle}
          onKeyDown={keyHandle}
        ></input>
        <button onClick={clickHandle}>Add</button>
      </div>
    </div>
  );
}

export default ToDoForm;
