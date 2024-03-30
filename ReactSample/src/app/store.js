import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/manageTodo';
import manageBlog from '../features/blog/manageBlog';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    manageTodo: todoReducer,
    manageBlog: manageBlog,
  },
});
