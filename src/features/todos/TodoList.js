import { useSelector } from 'react-redux';

import Todo from './Todo';

const getTodosByFilter = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter((todo) => todo.completed);
    case 'active':
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

const TodoList = () => {
  const filter = useSelector((state) => state.filters);
  const todos = useSelector((state) => getTodosByFilter(state.todos, filter));

  return (
    <ul className="todos">
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
