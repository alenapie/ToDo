import Header from "./components/Header.tsx";
import { Form } from "./components/Form.tsx";
import { TodoList } from "./components/TodoList.tsx";
import { useTodos } from "./hooks/useTodos";

const App = () => {
  const { todos, handleAddTodo, handleDeleteTodo } = useTodos();

  return (
    <>
      <Header />
      <Form onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </>
  );
};

export default App;
