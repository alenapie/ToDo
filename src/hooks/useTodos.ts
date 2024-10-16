import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todoSlice";
import { AppDispatch, RootState } from "../store";
import { addTodo, deleteTodo } from "../features/todoSlice";

export const useTodos = () => {
  const dispatch: AppDispatch = useDispatch();
  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = async (description: string) => {
    dispatch(addTodo(description));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return {
    todos,
    loading,
    error,
    handleAddTodo,
    handleDeleteTodo,
  };
};
