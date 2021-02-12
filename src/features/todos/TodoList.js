import { useSelector } from 'react-redux';

import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="todos">
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
