import { useState } from 'react';
import { useTodo } from '../context/useTodo';

const AddTodo = () => {
  const { addTodo } = useTodo();
  const [todoText, setTodoText] = useState('');

  const onChange = (e) => setTodoText(e.target.value);

  const onAddTodo = () => {
    addTodo(todoText);
    //reset input
    setTodoText('');
  };

  return (
    <div className="add">
      <input
        value={todoText}
        onChange={onChange}
        placeholder="What needs to be done today?"
      />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
