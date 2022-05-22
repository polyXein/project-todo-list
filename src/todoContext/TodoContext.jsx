import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from './useLocalStorage'
const TodoContext = createContext();


function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []); 
    
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false);


      //cantidad de todos complete and total todos
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
    // buscar los todos!
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos; 
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
    
      //buscar el todo y marcando complete al todo
      const completeTodo = (text)=>{
          const todoIndex  = todos.findIndex(todo => todo.text === text)
          const newTodos = [...todos];
            newTodos[todoIndex].completed = true;
            saveTodos(newTodos);
        };
        
        const addTodo = (text)=>{
          const newTodos = [...todos];
            newTodos.push({
              completed: false,
              text: text,
            });
            saveTodos(newTodos);
        };
    
        //delete todo
        const deleteTodo = (text)=>{
          const todoIndex  = todos.findIndex(todo => todo.text === text)
          const newTodos = [...todos];
            newTodos.splice(todoIndex, 1)
            saveTodos(newTodos);
        };


    return(
        <TodoContext.Provider value={{
            error,
            loading,
              totalTodos,
          completedTodos,
             searchValue,
          setSearchValue,
           searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,

        }}>
                {props.children}
        </TodoContext.Provider>
    );
}

export {TodoProvider, TodoContext};
