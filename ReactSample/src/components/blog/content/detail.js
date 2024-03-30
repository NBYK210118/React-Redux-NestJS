import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeBoard, selectBoard, updateBtn } from '../../../features/blog/manageBlog';
import { fetchBoardsList } from '../../../features/blog/blogSlice';

export const Detail = () => {
  const boards = useSelector((val) => val.manageBlog.boardsList);
  const currentBoard = useSelector((val) => val.manageBlog.currentBoard);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addOrUpdate, setAddOrUpdate] = useState(false); // false 이면 Add, true 이면 Update

  useEffect(() => {
    dispatch(fetchBoardsList());
    if (boards) {
      console.log(boards);
    }
  }, [dispatch]);

  const handleAddBtn = () => {
    navigate('/add');
  };

  const handleUpdateBtn = () => {
    if (currentBoard) {
      setAddOrUpdate(!addOrUpdate);
      dispatch(updateBtn());
      navigate(`/update/?status=${addOrUpdate}`);
    } else {
      alert('변경하실 게시물을 클릭해주세요!');
    }
  };

  const handleDeleteBtn = () => {
    if (currentBoard) {
      dispatch(removeBoard(currentBoard.id));
    } else {
      alert('삭제할 게시물을 선택해주세요!');
    }
  };

  return (
    <>
      <aside className="w-[250px] float-left border border-solid border-gray-400">
        <div className="ml-2 my-4">
          <span className="text-xl font-bold">현재 선택된 게시물</span>
          <div className="flex flex-col mt-2">
            <span className="my-2 font-semibold text-blue-600">
              Title: <span className="text-sm text-black">{currentBoard && currentBoard.title}</span>
            </span>
            <span className="text-blue-600 my-2 font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
              Description: <span className="text-black text-sm">{currentBoard && currentBoard.content}</span>
            </span>
            <span className="text-blue-600 my-2 font-semibold">
              Writer:<span className="text-black">{currentBoard && currentBoard.writer}</span>
            </span>
          </div>
        </div>
        <div className="ml-2 my-2">
          <span
            className="p-1 mr-2 rounded bg-green-500 text-sm font-bold text-white hover:bg-green-600"
            onClick={() => handleAddBtn()}
          >
            <button>Add</button>
          </span>
          <span
            className="p-1 mr-2 rounded bg-blue-500 text-sm font-bold text-white hover:bg-blue-600"
            onClick={() => handleUpdateBtn()}
          >
            <button>Update</button>
          </span>
          <span
            className="p-1 mr-2 rounded bg-red-500 text-sm font-bold text-white hover:bg-red-600"
            onClick={() => handleDeleteBtn()}
          >
            <button>Delete</button>
          </span>
        </div>
      </aside>
      <section className="w-[700px] float-right">
        <div className="ml-5 grid grid-cols-3 border border-solid border-gray-400">
          <span className="text-center font-semibold">ID</span>
          <span className="font-semibold">Title</span>
          <span className="font-semibold">Description</span>
        </div>
        <div
          className={`ml-5  border border-solid border-gray-400 ${
            boards.length === 0 ? 'flex justify-center bg-gray-500' : ''
          }`}
        >
          {boards.length > 0 ? (
            <>
              {boards.map((val) => (
                <div
                  className={`grid grid-cols-3 border-x-[1px] border-b-[2px] py-1 cursor-pointer hover:bg-gray-200 ${
                    currentBoard && currentBoard.id === val.id ? 'bg-blue-300 text-white' : ''
                  }`}
                  onClick={() => dispatch(selectBoard(val))}
                >
                  <span className="text-center">{val.id}</span>
                  <span>{val.title}</span>
                  <span className="text-ellipsis whitespace-nowrap overflow-hidden">{val.content}</span>
                </div>
              ))}
            </>
          ) : (
            <span className="text-center p-2 text-white font-bold">등록된 게시물이 없습니다</span>
          )}
        </div>
      </section>
    </>
  );
};
