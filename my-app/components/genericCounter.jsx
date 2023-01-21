import { useState } from "react";

const GenericCounter = ({ initial, step }) => {
  function useIncrement(initial, step) {
    const [count, setCount] = useState(initial);
    const increment = () => {
      setCount((c) => c + step);
    };
    return [count, increment];
  }

  const [count, increment] = useIncrement(initial, step);

  return (
    <button onClick={increment} className="bg-slate-300 rounded-md m-4 p-1">
      Count : {count}
    </button>
  );
};

export default GenericCounter;
