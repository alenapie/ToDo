import { List, Grid } from "@mui/material";
import { FC, useEffect } from "react";
import { Todo } from "./Todo";
import { TTodo } from "../types";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodos } from "../features/todoSlice";

type Props = {
  todos: TTodo[];
  onDelete: (id: string) => Promise<void>;
};

export const TodoList: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {todos && todos.length > 0 ? (
            todos.map(({ id, description }) => (
              <Todo
                key={id}
                text={description}
                handleDelete={() => handleDelete(id)}
              />
            ))
          ) : (
            <p>Задач пока нет</p>
          )}
        </List>
      </Grid>
    </Grid>
  );
};
