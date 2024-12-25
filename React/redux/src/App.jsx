import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "./components/counter/counterSlice";
import { useState } from "react";
const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }
  function handleByValue() {
    dispatch(incrementByValue(amount));
  }
  function handleReset() {
    dispatch(reset());
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h3>Count: {count > 0 ? `${count}` : `${0}`}</h3>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      {/* <button onClick={handleByValue}>inc 5</button> */}
      <button onClick={handleReset}>reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleByValue}>increment by amount</button>
    </div>
  );
};

export default App;
