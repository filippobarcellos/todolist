import { createContext, useContext, useState, useEffect } from 'react';
import { v4 } from 'uuid';

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: v4(), text: todo, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const filterTodos = () => {
    switch (status) {
      case 'all':
        return setFilteredTodos(todos);
      case 'completed':
        return setFilteredTodos(todos.filter((todo) => todo.completed));
      case 'active':
        return setFilteredTodos(todos.filter((todo) => !todo.completed));
      default:
        return setFilteredTodos(todos);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        removeTodo,
        toggleTodo,
        filterTodos,
        todos,
        filteredTodos,
        setStatus,
        status,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
