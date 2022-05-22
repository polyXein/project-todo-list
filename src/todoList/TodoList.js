import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className='todo_list_compont'>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
