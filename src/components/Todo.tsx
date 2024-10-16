import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todoSlice";

type Props = {
  text: string;
  handleDelete: () => void;
};

export const Todo: FC<Props> = ({ text, handleDelete }) => {
  return (
    <ListItem>
      <ListItemText primary={text} />
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
