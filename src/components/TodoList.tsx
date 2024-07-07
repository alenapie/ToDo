import { List, Grid } from "@mui/material";
import { FC } from "react";
import { Todo } from "./Todo";

type Props = {
  todos: string[];
  onDelete: (index: number) => void;
};

export const TodoList: FC<Props> = ({ todos, onDelete }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt={20}
    >
      <Grid item>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {todos.map((item, index) => (
            <Todo
              key={index}
              text={item}
              handleDelete={() => onDelete(index)}
            />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
