import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: uuid(), task });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={e => setTask(e.target.value)} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
