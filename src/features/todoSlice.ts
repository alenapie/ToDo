import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../components/Todo";
const URL = `http://localhost:8080/api/todos`;

export interface Todo {
  id: string;
  description: string;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetchTodos",
  async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
);

export const addTodo = createAsyncThunk<void, string>(
  "todos/addTodo",
  async (description: string, { dispatch }) => {
    await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(fetchTodos());
  }
);

export const deleteTodo = createAsyncThunk<void, string>(
  "todos/deleteTodo",
  async (id: string, { dispatch }) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    dispatch(fetchTodos());
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Получение todos
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка при получении данных";
      })

      // Добавление todo
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка при добавлении задачи";
      })

      // Удаление todo
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка при удалении задачи";
      });
  },
});

export default todosSlice.reducer;
