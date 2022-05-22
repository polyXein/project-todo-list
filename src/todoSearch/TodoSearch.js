import React,{useContext} from 'react';
import { TodoContext } from '../todoContext/TodoContext';
import './TodoSearch.css';

function TodoSearch() {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      className="TodoSearch"
      placeholder="Create your new To Do"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
