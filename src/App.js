import './App.css';

import Filters from './features/filters/Filters';
import AddTodo from './features/todos/AddTodo';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <div className="App">
      <h1>todolist</h1>
      <Filters />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
