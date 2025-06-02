import React from "react";

const Header = ({ todos }) => {
  let tasks = todos.length;

  return (
    <header>
      <h1 className="text-gradient">
        You have {tasks} open {tasks > 1 ? "tasks" : "task"}
      </h1>
    </header>
  );
};

export default Header;
