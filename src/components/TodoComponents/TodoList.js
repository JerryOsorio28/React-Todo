import React from 'react';
import Todo from './Todo';

const toDoList = list => {
  console.log(list)

  return (
    <div className='toDoList'>
      {list.list.map(task => (
        <Todo key={task.id} task={task.task} />
      ))}
    </div>
  );
};

export default toDoList;
