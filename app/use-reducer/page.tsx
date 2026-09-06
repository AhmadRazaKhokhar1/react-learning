"use client"
import { useReducer } from "react";

interface InitialStateType {
  count: number;
  name: string;
}

const initialState: InitialStateType = {
    name:"ahmad",
  count: 0,
};

function reducer(state: InitialStateType, action):"Unrecognized command" | InitialStateType {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return "Unrecognized command";
  }
}

export default function page() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrement() {
    dispatch({ type: "increment" });
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
