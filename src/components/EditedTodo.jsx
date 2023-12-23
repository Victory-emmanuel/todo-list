import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export const EditedTodo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div key={task.id} id="added-todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <EditIcon onClick={() => editTodo(task.id)} />
        <DeleteOutlinedIcon onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
