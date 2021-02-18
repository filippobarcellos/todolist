import { useTodo } from '../context/useTodo';
import Todo from './Todo';

const TodoList = () => {
  const { filteredTodos } = useTodo();

  return (
    <ul data-testid="todoList" className="todos">
      {filteredTodos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
