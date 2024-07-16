import { useEffect, useState } from "react";
import { TTodo } from "../types";

const URL = `http://localhost:8080/api/todos`;

export const useTodos = () => {
    const [todos, setTodos] = useState<TTodo[]>([]);

    const getComments = async () => {
      const response = await fetch(URL);
      const data = await response.json();
  
      if (data) {
        setTodos(data);
      } else {
        setTodos([]);
      }
    };
  
    const handleAddTodo = async (description: string) => {
      await fetch(URL, { method: "POST", body: JSON.stringify({ description }) });
      getComments();
    };
    const handleDeleteTodo = async (id: string) => {
      await fetch(`${URL}/${id}`, { method: "DELETE" });
      getComments();
    };
  
    useEffect(() => {
      getComments();
    }, []);

    return {
        todos,
        handleAddTodo, 
        handleDeleteTodo
    }
}