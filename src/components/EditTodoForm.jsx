import { useState } from "react";
function EditTodoForm({ editTodo, task }) {
  //  The EditTodoForm component receives two props: editTodo and task.
  //  The editTodo prop is a function that is used to update the todo item,
  //  and the task prop represents the todo item that is being edited.

  const [value, setValue] = useState(task.task);
  //  Inside the EditTodoForm component, the useState hook is used to initialize the value state variable.
  //  The value state variable is used to manage the input field's value.
  //  The setValue function is used to update the value state.
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  // The handleSubmit function is defined to handle the form submission.
  // It prevents the default form submission behavior and calls the editTodo function,
  //  passing the updated task value and the id of the todo item being edited.
  //  After calling the editTodo function, the setValue function is called to reset the value state to an empty string.

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      {/* The onSubmit event of the form is set to the handleSubmit function. */}
      <input
        type="text"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      {/* Inside the form, an input element is rendered.The type attribute is set to
      "text", and the value attribute is set to the value state variable.This
      ensures that the input field's value is controlled by the value state.The
      placeholder attribute is set to "Update Task".The onChange event of the
      input element is set to an arrow function that calls the setValue
      function, passing the updated value from the input field. */}
      <button type="submit">Update Task</button>
      {/* Finally, a button element with a type of "submit" is rendered.This button
      is used to submit the form and trigger the handleSubmit function when
      clicked. */}
    </form>
  );
}

export default EditTodoForm;
