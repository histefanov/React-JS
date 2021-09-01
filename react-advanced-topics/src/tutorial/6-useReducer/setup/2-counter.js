import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Invalid action type");
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Counter</h3>
      <h4>{state.count}</h4>
      <button
        className='calc-btn'
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className='calc-btn'
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
