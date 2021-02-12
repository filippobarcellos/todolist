import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push({ id: v4(), text: action.payload, completed: false });
      },
    },
    toggleTodo: {
      reducer: (state, action) => {
        const todo = state.find((t) => t.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
