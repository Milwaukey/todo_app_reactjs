import { useState } from "react"

export default function AddTodo ( {updateTodos }) {
    const [ todo, SetTodo] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            id : Date.now(),
            status : true,
            text : todo
        }

        updateTodos(newTodo)
        SetTodo('')
        
      }

    return (
        <form onSubmit={handleSubmit} className="input-container">
            <input type="text" placeholder="E.g. walk the dog" value={todo} onChange={(e) => SetTodo(e.target.value)} />
            <button>Add Todo</button>
        </form>
    )
}

