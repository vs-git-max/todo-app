import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  //saving to the local storage

  const tabs = ["All", "Open", "Completed"];

  const [currentTab, setCurrentTab] = useState("All");

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveTodos(newTodoList);
  };

  const handleCompleteTodo = (index) => {
    let newTodoList = [...todos];
    let completedTodos = todos[index];
    completedTodos["complete"] = true;
    newTodoList[index] = completedTodos;
    setTodos(newTodoList);
    handleSaveTodos(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);

    setTodos(newTodoList);
    handleSaveTodos(newTodoList);
  };

  const handleSaveTodos = (currentTodos) => {
    localStorage.setItem("todo-item", JSON.stringify({ todos: currentTodos }));
  };

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-item")) {
      return;
    }

    let db = JSON.parse(localStorage.getItem("todo-item"));
    console.log(db);
    console.log(db.todos);

    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        tabs={tabs}
        todos={todos}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        currentTab={currentTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </>
  );
};

export default App;
