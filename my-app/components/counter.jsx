import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    setCount((c) => c + 1);
  }
  return (
    <>
      <button onClick={handleClick} className="p-1 m-4 rounded-md bg-slate-300">
        Count : {count}
      </button>
    </>
  );
};

export default Counter;
