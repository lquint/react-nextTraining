import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    setCount((c) => c + 1);
  }
  return (
    <>
      <button onClick={handleClick} className="bg-slate-300 rounded-md m-4 p-1">
        Count : {count}
      </button>
    </>
  );
};

export default Counter;
