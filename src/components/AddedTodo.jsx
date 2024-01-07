import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, Typography } from "@mui/material";
function AddedTodo({ task, toggleComplete, deleteTodo, editTodo }) {
  // In the AddedTodo.jsx file, the component is defined as a functional component.
  // It receives props such as task, toggleComplete, deleteTodo, and editTodo from its parent component.

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
        width: "90%",
      }}
      key={task.id}
      id="added-todo"
    >
      <Typography
        variant="p"
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </Typography>
      {/* The component renders a div element with the id "added-todo".Inside this
      div, there is a paragraph element that displays the task text.The
      className of the paragraph element is conditionally set based on the
      completed property of the task object.If the task is completed, the
      "completed" class is added to the paragraph element, which applies a
      specific styling. The paragraph element has an onClick event handler that
      calls the toggleComplete function with the task's id as an argument.This
      function is responsible for toggling the completion status of the task. */}
      <Box>
        <EditIcon onClick={() => editTodo(task.id)} />
        <DeleteOutlinedIcon onClick={() => deleteTodo(task.id)} />
        {/* The EditIcon has an onClick event handler that calls the editTodo
        function with the task's id as an argument.This function is responsible
        for initiating the editing mode for the task. The DeleteOutlinedIcon
        also has an onClick event handler that calls the deleteTodo function
        with the task's id as an argument.This function is responsible for
        deleting the task from the list. */}
      </Box>
    </Box>
  );
}

// Overall, the AddedTodo component displays a task with the ability to toggle its completion status, edit the task, and delete the task.
// It receives these functionalities through props from its parent component.
export default AddedTodo;
