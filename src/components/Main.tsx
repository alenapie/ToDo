import {
  Button,
  List,
  ListItem,
  IconButton,
  ListItemText,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import * as React from "react";

export const Main = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = () => setTodos((prev) => [...prev, text]);

  const handleDeleteTodo = (index: number) => {
    const newState = todos.filter((_, i) => i !== index);
    setTodos(newState);
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
            width: "100%", // Расширение ширины поля ввода на всю доступную ширину
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
      <Grid item>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {todos.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
              <IconButton onClick={() => handleDeleteTodo(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Main;
