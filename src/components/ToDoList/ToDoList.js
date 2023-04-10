import React from "react";
import "./ToDoList.css";

function ToDoList(props) {
  const onClickHandle = (e) => {
    props.deleteItem(props.index);
  };
  return (
    <li className="todo-item">
      {props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={onClickHandle}
        ></i>
      </span>
    </li>
  );
}

export default ToDoList;
