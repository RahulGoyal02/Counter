import { useDispatch, useSelector } from "react-redux";
import{incCount,decCount,resetCount} from "../store/action"

const Counter = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  return (
    <>
      <h1>Counter</h1>
      <h1>{store.counter}</h1>
      <button onClick={()=> dispatch(incCount(10))}>Increment</button>
      <button onClick={()=> dispatch(decCount(1))}>Decrement</button>
      <button onClick={()=> dispatch(resetCount(0))}>Reset</button>
    </>
  );
};

export default Counter;
