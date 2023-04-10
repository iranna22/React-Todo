import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/TodForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todo, setTodo] = useState([]);
  
  const addList = (inputText) => {
    if(inputText!=='')
      setTodo([...todo,inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...todo];
    newListTodo.splice(key,1);
    setTodo([...newListTodo])

  }
  return (
    <div className="App">
      <div className="app-container">
        <ToDoForm addList={addList} />
        {todo.map((listItem, i) => {
          return <ToDoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>;
        })}
      </div>
    </div>
  );
}

export default App;
