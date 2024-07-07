import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";

type Props = {
  handleDelete: () => void;
  text: string;
};

export const Todo: FC<Props> = ({ handleDelete, text }) => {
  return (
    <ListItem>
      <ListItemText primary={text} />
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
