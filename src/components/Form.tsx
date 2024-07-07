import { Button, TextField, Grid } from "@mui/material";
import { FC, useState } from "react";

type Props = {
  handleAddTodo: (text: string) => void;
};

export const Form: FC<Props> = ({ handleAddTodo }) => {
  const [text, setText] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleAddTodo(text);
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
            width: "100%", // Расширение ширины поля ввода на всю доступную ширину
          }}
          onKeyDown={handleKeyPress}
          InputProps={{
            endAdornment: (
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddTodo(text)}
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
