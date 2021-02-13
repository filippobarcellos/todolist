import { combineReducers } from 'redux';
import todosReducer from '../features/todos/todosSlice';
import filtersReducer from '../features/filters/filtersSlice';

export default combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
