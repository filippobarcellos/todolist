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
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
