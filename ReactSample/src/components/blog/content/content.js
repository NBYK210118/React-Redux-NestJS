import { Route, Routes, useNavigate } from 'react-router-dom';
import { BoardInput } from './board-input';
import { Detail } from './detail';
import { useDispatch, useSelector } from 'react-redux';

export const Content = () => {
  const currentBoard = useSelector((val) => val.manageBlog.currentBoard);
  return (
    <div className="mt-10 w-[960px] clear-both">
      <Routes>
        <Route path="/" element={<Detail />}></Route>
        <Route path="/add" element={<BoardInput />}></Route>
        <Route path="/update/*" element={<BoardInput currentBoard={currentBoard} />}></Route>
      </Routes>
    </div>
  );
};
