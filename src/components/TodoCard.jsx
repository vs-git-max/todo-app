import React from "react";

const TodoCard = ({
  todoIndex,
  todo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div>
        <button
          onClick={() => handleCompleteTodo(todoIndex)}
          disabled={todo.complete}
        >
          Done
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
