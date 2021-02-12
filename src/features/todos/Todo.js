import { useDispatch } from 'react-redux';
import { toggleTodo } from '../todos/todosSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={todo.completed ? 'completed' : null}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      {todo.text}
    </li>
  );
};

export default Todo;
