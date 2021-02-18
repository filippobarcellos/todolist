import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoProvider } from './context/useTodo';

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
