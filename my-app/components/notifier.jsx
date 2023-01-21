import { useEffect, useState } from "react";

const Notifier = () => {
  const [count, increment] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    increment((c) => c + 1);
  };

  useEffect(() => {
    document.title = `${count > 0 ? "(" + count + ")" : ""} Test Page`;
  });

  return (
    <button onClick={handleClick} className="bg-blue-400 rounded-md mx-4">
      Add a notification
    </button>
  );
};

export default Notifier;
