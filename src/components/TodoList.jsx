import TodoCard from "./TodoCard";

const TodoList = ({
  todos,
  currentTab,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  const filteredTodoList =
    currentTab === "All"
      ? todos
      : currentTab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);

  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            todo={todo}
            key={todoIndex}
            todoIndex={todoIndex}
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
