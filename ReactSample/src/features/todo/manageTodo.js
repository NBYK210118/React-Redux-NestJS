import { createSlice, nanoid } from '@reduxjs/toolkit';

export const manageTodo = createSlice({
  name: 'manageTodo',
  initialState: {
    todos: [{ id: 1, text: '할 일' }],
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.todos.push({ id, text });
      },
      prepare(data) {
        const { id, text } = data;
        return { payload: { id, text } };
      },
    },
    removeTodo(state, action) {
      console.log(action);
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});

export const { addTodo, removeTodo } = manageTodo.actions;

export default manageTodo.reducer;
