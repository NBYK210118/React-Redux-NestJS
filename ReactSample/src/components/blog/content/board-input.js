import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBoard, updateBoard } from '../../../features/blog/blogSlice';
import { setContent, setTitle } from '../../../features/blog/manageBlog';

export const BoardInput = () => {
  const content = useSelector((val) => val.manageBlog.content);
  const title = useSelector((val) => val.manageBlog.title);
  const currentBoard = useSelector((val) => val.manageBlog.currentBoard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentBoard) {
      dispatch(setTitle(currentBoard.title));
      dispatch(setContent(currentBoard.content));
    }
  }, []);

  const handleSubmit = () => {
    const data = {
      title,
      content,
    };

    if (!currentBoard) {
      dispatch(addBoard(data));
    } else {
      const update_data = {
        title,
        content,
        id: currentBoard.id,
      };
      dispatch(updateBoard(update_data));
    }
    navigate('/');
  };

  return (
    <div className="w-full">
      <header className="my-3">
        <h1 className="text-xl font-bold">Title:</h1>
        <input
          type="text"
          className="w-[60%] py-1 pl-1 border border-gray-400 rounded shadow focus:outline-none"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
      </header>
      <div className="mb-5">
        <label htmlFor="" className="text-xl font-bold">
          Description:{' '}
        </label>
        <textarea
          className="w-full h-[400px] pl-1 appearance-none border border-gray-400 rounded shadow focus:outline-none"
          value={content}
          onChange={(e) => dispatch(setContent(e.target.value))}
        ></textarea>
      </div>
      <span
        className="p-3 px-5 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        onClick={() => handleSubmit()}
      >
        <button>Submit</button>
      </span>
    </div>
  );
};
