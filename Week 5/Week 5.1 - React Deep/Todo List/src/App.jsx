import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7 - 9",
      completed: false
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9 - 10",
      completed: true
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9 - 10",
      completed: true
    }
  ]);

  function addTodo() {
    const newTodo = {
      title: "Random Task",
      description: "This is a new random task",
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  function Todo(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    );
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>
  );
}

export default App;
