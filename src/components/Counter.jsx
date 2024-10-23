import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementBy,
} from "../redux/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const [numberEntered, setNumberEntered] = useState(0);
  const dispatch = useDispatch();
  const handleIncrement = (event) => {
    console.log("h");
    setTimeout(() => {
      console.log("waiting 2000 synchronously");
      dispatch(increment());
    }, 2000);
  };
  const handleDecrement = async (event) => {
    console.log("h");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    dispatch(decrement());
  };
  const handleIncrementBY = () => {
    console.log(typeof numberEntered);
    dispatch(incrementBy(Number(numberEntered)));
  };
  const handleIncrementAzync = () => {
    console.log("Asynchronous request");
    dispatch(incrementAsync());
  };
  return (
    <>
      <h1>Count</h1>
      <p>{count}</p>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <input
        type="text"
        value={numberEntered}
        onChange={(e) => setNumberEntered(e.target.value)}
      ></input>
      <button type="button" onClick={handleIncrementBY}>
        Increment by 5
      </button>
      <button type="button" onClick={handleIncrementAzync}>
        IncrementAsync by 5
      </button>
    </>
  );
};

export default Counter;
