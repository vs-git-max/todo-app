import React, { useState } from "react";

const TodoInput = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add task.."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (inputValue.trim().length < 3) {
            console.error("Add some todo");
            setInputValue("");
            return;
          }
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
