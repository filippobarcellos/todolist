import { useDispatch } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import { toggleTodo, removeTodo } from '../todos/todosSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={todo.completed ? 'completed' : null}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span>{todo.text}</span>
      <BsTrash onClick={() => dispatch(removeTodo(todo.id))} />
    </li>
  );
};

export default Todo;
