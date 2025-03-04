import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"
import { useState } from "react"


const storedTodos = JSON.parse(localStorage.getItem('storedTodos')) || []


function App() {
  const [ todos, setTodos ] = useState(storedTodos)

  function updateTodos (newTodo) {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      updateLocalStorage(updatedTodos)
      return updatedTodos;
    })
  }

  function deleteTodo (deletedTodo){
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter( todo => todo.id !== deletedTodo.id)
      updateLocalStorage(updatedTodos)
      return updatedTodos
    })
  }

  function markTodoComplete (markedTodo){
    const updatedTodos = todos.map((todo) => {
      if(todo.id == markedTodo.id){
        todo.status = !todo.status;
      }
      return todo;
    })
    setTodos(updatedTodos)
    updateLocalStorage(updatedTodos)
  }

  function editTodo (todoId, updatedTodo){
    const updatedTodos = todos.map((todo) => {
      if(todo.id == todoId){
        todo.text = updatedTodo
      }
      return todo;
    })
    setTodos(updatedTodos)
    updateLocalStorage(updatedTodos)
  }

  function updateLocalStorage(todo){
    const storedTodos = JSON.parse(localStorage.getItem('storedTodos')) || [];
    localStorage.setItem('storedTodos', JSON.stringify(todo))
  }


  return (
    <div className="app-container">
      <h1 className="header">Get Things Done!</h1>
      <AddTodo updateTodos={updateTodos} />

      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} markTodoComplete={markTodoComplete} editTodo={editTodo} />
        ))}
      </ul>

    </div>
  )
}

export default App


