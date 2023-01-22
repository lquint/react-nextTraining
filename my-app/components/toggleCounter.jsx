import Counter from "./counter";
import { useEffect, useState } from "react";

const ToggleCounter = () => {
  const [visibleCounter, toggleCounter] = useToggle(true);

  function useToggle(initialValue = true) {
    const [value, setValue] = useState(initialValue);
    const toggler = () => {
      setValue((boolValue) => !boolValue);
    };

    return [value, toggler];
  }

  return (
    <div className="flex min-h-[64px]">
      <input
        className="p-1 mx-4 my-auto"
        type="checkbox"
        onChange={toggleCounter}
      />
      {visibleCounter && <Counter></Counter>}
    </div>
  );
};

export default ToggleCounter;
