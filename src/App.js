import React, { useReducer } from 'react';
import './style.css';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, age: state.age + 1 };
    case 'decrement':
      return { ...state, age: state.age - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
