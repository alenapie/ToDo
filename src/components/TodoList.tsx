import { List, Grid } from "@mui/material";
import { FC, useEffect } from "react";
import { Todo } from "./Todo";
import { TTodo } from "../types";

type Props = {
  todos: TTodo[];
  onDelete: (id: string) => Promise<void>;
};

export const TodoList: FC<Props> = ({ todos, onDelete }) => {
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
          {todos.map(({ id, description }) => (
            <Todo
              key={id}
              text={description}
              handleDelete={() => onDelete(id)}
            />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
