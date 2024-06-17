import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  function sumar() {
    setCounter(counter + 1)
  }
  function restar() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h4>{counter}</h4>
      <button onClick={restar}>Restar</button>
    </div>
  );
};
