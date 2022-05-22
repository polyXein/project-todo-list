import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal}) {

  const onClickButton = () => {
   setOpenModal(prevState => !prevState)
  };
  
  return (
    <div>

      <button
      onClick={onClickButton}
      id="button_createTodoButton"
      >
      +
      </button>
    </div>
  );
}

export { CreateTodoButton };
