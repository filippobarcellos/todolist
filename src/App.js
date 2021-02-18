import './App.css';

import Filters from './components/Filters';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

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
