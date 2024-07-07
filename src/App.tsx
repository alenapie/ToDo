import Header from "./components/Header.tsx";
import { Form } from "./components/Form.tsx";
import { TodoList } from "./components/TodoList.tsx";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (text: string) => setTodos((prev) => [...prev, text]);
  const handleDeleteTodo = (index: number) => {
    const newState = todos.filter((_, i) => i !== index);
    setTodos(newState);
  };

  return (
    <>
      <Header />
      <Form handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </>
  );
};

export default App;
