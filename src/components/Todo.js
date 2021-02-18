import { useTodo } from '../context/useTodo';
import { BsTrash } from 'react-icons/bs';

const Todo = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodo();
  return (
    <li className={todo.completed ? 'completed' : null}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <BsTrash onClick={() => removeTodo(todo.id)} />
    </li>
  );
};

export default Todo;
