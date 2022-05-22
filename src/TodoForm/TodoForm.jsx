import React, {useContext, useState} from 'react'
import "./TodoForm.css"
import {TodoContext} from "../todoContext/TodoContext"

const TodoForm = () => {

const [newTodoValue, setNewTodoValue] = useState("");


  const{
    addTodo,
    setOpenModal,
  } = useContext(TodoContext)

  const onCancel = () =>{
    setOpenModal(preEvent => !preEvent)
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(preEvent => !preEvent)

  }
  const onChange = (e) =>{
    setNewTodoValue(e.target.value)
  }


  return (
    <form onSubmit={onSubmit} >
    <label>Escribe tu nuevo To Do</label>
    <textarea
      value = {newTodoValue}
      onChange = {onChange}
      placeholder = "Escribe una nueva tarea"
    />
    <div className="TodoForm-buttonContainer">

      <button
        type="button"
        className="TodoForm-button TodoForm-button-cancel"
        onClick = {onCancel}
      >
        Cancelar
      </button>

      <button
        className="TodoForm-button TodoForm-button-add"
        type= "submit"
      >
        Añadir
        </button>
    </div>
  </form>
  )
}

export default TodoForm