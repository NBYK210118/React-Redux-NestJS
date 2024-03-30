import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../features/todo/manageTodo';
import { useState } from 'react';

export const TodoList = () => {
  const todos = useSelector((state) => state.manageTodo.todos);
  const todosCount = useSelector((state) => state.manageTodo.todos.length);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    const newCount = todosCount + 1;
    const data = { text: todoText, id: newCount };
    dispatch(addTodo(data));
  };

  return (
    <div className="my-5">
      <input
        type="text"
        className="pl-1 text-sm border border-gray-400 mr-2"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <span className="p-1 mr-3 bg-blue-500 rounded hover:bg-blue-600" onClick={() => handleAddTodo()}>
        <button className="text-sm text-white font-bold">할 일 추가</button>
      </span>

      <div id="todo-list" className="mt-5">
        {todos.map((val) => (
          <div className="flex justify-between items-center p-2 border border-solid border-gray-400 rounded shadow">
            <div className="">
              <span className="mr-10 text-xs">{val.id}</span>
              <span className="text-xs mr-5">{val.text}</span>
            </div>
            <span className="px-1 bg-red-500 rounded hover:bg-red-600" onClick={() => dispatch(removeTodo(val.id))}>
              <button className="text-xs text-white font-bold">제거</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
