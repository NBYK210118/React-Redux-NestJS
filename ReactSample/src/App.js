import React from 'react';
import { Counter } from './components/Counter';
import { TodoList } from './components/todo-list';
import { Header } from './components/blog/header/header';
import { Content } from './components/blog/content/content';
import { Footer } from './components/blog/footer/footer';

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Content />
      <Footer />
    </div>

    // <div className="flex justify-center m-10">

    //   <div className="flex flex-col">
    //     <span className="text-3xl font-bold">&lt;할 일 목록&gt;</span>
    //     <TodoList />

    //   </div>
    // </div>
  );
}

export default App;
