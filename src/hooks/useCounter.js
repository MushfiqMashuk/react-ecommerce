import { useState } from "react";

/**
 * A custom hook for increment and decrement purpose
 * @param {number} initialState
 * @returns {object}
 */

export const useCounter = (initialState = 0) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return {
    counter,
    increment,
    decrement,
  };
};
