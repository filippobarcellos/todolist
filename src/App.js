import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './App.css';

import Filters from './features/filters/Filters';
import AddTodo from './features/todos/AddTodo';
import TodoList from './features/todos/TodoList';

export const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>todolist</h1>
        <Filters />
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
