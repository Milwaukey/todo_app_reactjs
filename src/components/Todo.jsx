import { RiEditBoxFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";


export default function Todo ( { todo, deleteTodo, markTodoComplete, editTodo } ) {
    const [ thisTodo, setThisTodo ] = useState(todo.text)
    const [ isEditing, setIsEditing ] = useState(false);

    function onClickEdit () {
        setIsEditing((editing) => !editing)

        if(isEditing){
            editTodo(todo.id, thisTodo)
        }
        
    }

    function onClickDelete () {
        deleteTodo(todo)
    }

    function onClickMarkTodoComplete () {
        markTodoComplete(todo)
    }

    return (
        <li className="todo-item">
            {isEditing ? <input value={thisTodo} onChange={(e) => setThisTodo(e.target.value)} /> : ( 
                <span onClick={onClickMarkTodoComplete} className={todo.status == false ? 'markedComplete' : ''}>{thisTodo}</span>)
            }

            {isEditing ? <button onClick={onClickEdit}>Save</button> : (
            <div className="actions">
                <RiEditBoxFill onClick={onClickEdit}/>
                <MdDeleteForever onClick={onClickDelete}/>
            </div>
            )
            }
        </li>
    )
}