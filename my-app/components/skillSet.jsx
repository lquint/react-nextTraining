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
        <label>Enter a skill: </label>
        <input
          className="mx-2 border"
          type="text"
          value={input}
          onInput={(e) => setInput(e.target.value)}
          required
        />
        <input
          className="px-2 mx-2 bg-gray-400 border rounded-md"
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
