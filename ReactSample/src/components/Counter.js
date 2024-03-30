import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from '../features/counter/counterSlice';

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button className="p-2" onClick={() => dispatch(incremented())}>
        Up
      </button>
      <span className="p-2">{count}</span>
      <button className="p-2" onClick={() => dispatch(decremented())}>
        Down
      </button>
    </div>
  );
};
