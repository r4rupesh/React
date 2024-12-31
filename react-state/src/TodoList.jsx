import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css"
export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");
  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTask = (id) => {
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
  };
  let markAllDone = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          isDone:true,
        };
      })
    );
  };
  let markAsDone = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone:true,
          };
        } else {
          return todo;
        }
      })
    );
  };
 


  return (
    <div className="todoContatiner">
      <input
        type="text"
        placeholder="Add a tasks"
        value={newTodo}
        onChange={updateTodoValue}
      className="input"
      />
      <br />
      <button onClick={addNewTask}>add task</button>
      <br />
      <br />
      <br />
      <hr />

      <h4>TodoList</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} >
            <span style={todo.isDone ?{textDecoration:"line-through"} :{}}>{todo.task}</span>
            <span >
              &nbsp; &nbsp;
              <button onClick={() => deleteTask(todo.id)} style={{height:"2rem",width:"3.5rem", fontSize:"10px"}}>delete</button>
              &nbsp;&nbsp;
              <button onClick={() => markAsDone(todo.id)} style={{height:"2rem",width:"3.5rem", fontSize:"10px"}}>
              mark as done
              </button>
            </span>
          </li>
        ))}
      </ul>
      <button onClick={markAllDone}>mark all done</button>
      <br />
    </div>
  );
}
