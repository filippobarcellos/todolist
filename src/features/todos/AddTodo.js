import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todos/todosSlice';

const AddTodo = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState('');

  const onChange = (e) => setTodoText(e.target.value);

  const onAddTodo = () => {
    dispatch(addTodo(todoText));
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
