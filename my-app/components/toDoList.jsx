import { useEffect, useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    (async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        setTodos(responseData);
      } else {
        alert(JSON.stringify(responseData));
      }
      setLoading(false);
    })();
  }, []);
  return (
    <div className="m-2">
      <p className="font-semibold">TODO List</p>
      {loading ? (
        <p>Loading list ...</p>
      ) : (
        <ul className="ml-8 list-decimal">
          {todos.map((t) => (
            <li>{t.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;
