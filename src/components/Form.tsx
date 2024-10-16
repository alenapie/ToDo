import { Button, TextField, Grid } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { AppDispatch } from "../store";

// type Props = {
//   onAddTodo: (text: string) => void;
// };

export const Form: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    const result = text.trim();
    if (result) {
      dispatch(addTodo(result));
      setText("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt={20}
    >
      <Grid item position={"sticky"}>
        <TextField
          label="Что ты хочешь сделать?"
          id="outlined-required"
          fullWidth
          value={text}
          onChange={({ target }) => setText(target.value)}
          sx={{
            width: "100%",
          }}
          onKeyDown={handleKeyPress}
          InputProps={{
            endAdornment: (
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddTodo}
              >
                Добавить
              </Button>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};
