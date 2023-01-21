import { useState } from "react";

const SkillSet = () => {
  const [skills, addSkill] = useState([]);
  const [input, setInput] = useState("");
  const submitSkill = (e) => {
    e.preventDefault();
    addSkill((skills) => {
      return [...skills, input];
    });
  };
  const colors = ["red", "blue", "green", "purple", "yellow"];
  return (
    <div>
      <form onSubmit={submitSkill}>
        <label for="name">Enter your name: </label>
        <input
          className="border mx-2"
          type="text"
          value={input}
          onInput={(e) => setInput(e.target.value)}
          required
        />
        <input
          className="border mx-2 px-2 rounded-md bg-gray-400"
          type="submit"
          value="Add"
        ></input>
        <div className="flex flex-row min-h-[56px]">
          {skills.map((item, i) => (
            <div
              key={i}
              className={`bg-${
                colors[i % 5]
              }-300 rounded-full m-4 text-center px-5`}
            >
              {item}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default SkillSet;
