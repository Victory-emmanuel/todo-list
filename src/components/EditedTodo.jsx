import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, Typography } from "@mui/material";
export const EditedTodo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.2rem 0.2rem",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "1rem",
        gridTemplateColumns: " 80% 20%",
        background: " #ff6969",
        width: "100%",
      }}
      key={task.id}
      id="added-todo"
    >
      <Typography
        variant="p"
        component="p"
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </Typography>
      <Box>
        <EditIcon onClick={() => editTodo(task.id)} />
        <DeleteOutlinedIcon onClick={() => deleteTodo(task.id)} />
      </Box>
    </Box>
  );
};
