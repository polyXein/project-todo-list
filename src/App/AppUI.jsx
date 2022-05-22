import React,{useContext, Fragment} from 'react'
import "./App.css"

import Modal from '../modal/Modal'

import { TodoCounter } from '../todoCounter/TodoCounter';
import { TodoSearch } from '../todoSearch/TodoSearch';
import { TodoList } from '../todoList/TodoList';
import { TodoItem } from '../todoItem/TodoItem';
import { CreateTodoButton } from '../createTodoButton/CreateTodoButton';

import { TodoContext } from '../todoContext/TodoContext';
import TodoForm from '../TodoForm/TodoForm';

const AppUI = () => {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
      } = useContext(TodoContext);

  return (
    <div className='container__app_todolist'>

<Fragment>
      <TodoCounter/>
      <TodoSearch/>
              
      <TodoList>
      {loading && <p>Estamos cargando..</p>}
      {error && <p> Desesperate...</p>}
      {(!loading && !searchedTodos.length) && <p>Create your first todo</p>}

      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    
       { !!openModal && ( 
          <Modal className="">
            <TodoForm/>
          </Modal>)
       }

      <CreateTodoButton
      className="createTodoButton_compont"
      setOpenModal={setOpenModal}
      openModal={openModal}
      />

    </Fragment>

    </div>
  )
}

export  default AppUI 