import { useState } from "react";
import styled from "styled-components";
function TodoForm({ addTodo }) {
  //   Props Usage:
  // Receiving Props:
  // Receives addTodo as a prop: { addTodo }.
  // Utilizes the addTodo function received from the parent (TodoWrapper) to add new todo items when the form is submitted
  const [value, setValue] = useState("");
  //   State Initialization:
  // Initializes the value state variable as an empty string to manage the input field's value.
  // setValue is the function used to update the value state.
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
    console.log(value);
  };
  //   handleSubmit Function:
  // Functionality:
  // Triggered on form submission (onSubmit event).
  // Prevents the default form submission behavior (e.preventDefault()).
  // Calls the addTodo function (received as a prop) with the current value state, adding a new todo.
  // Resets the value state to an empty string after adding the todo.
  return (
    <SearchForm id="todo-form" onSubmit={handleSubmit}>
      {/* The onSubmit event of the form is set to the handleSubmit function. */}
      <input
        type="text"
        value={value}
        placeholder="What is your task?"
        onChange={(e) => setValue(e.target.value)}
      />
      {/* Input Field: Controlled Input: The input field's value is controlled by
      the value state. onChange event updates the value state whenever the input
      field's content changes (onChange={(e) => setValue(e.target.value)}). */}
      <Button type="submit">Add Task</Button>
    </SearchForm>
  );
}

// Working Together (Props and State Interaction):
// TodoForm receives the addTodo function from TodoWrapper as a prop.
// When the form is submitted in TodoForm, it triggers handleSubmit, which calls the addTodo function (received via props) from TodoWrapper.
// Both components use the useState hook to manage their respective state (value in TodoForm and todos in TodoWrapper).
// Props are used to pass down the addTodo function from the parent (TodoWrapper) to the child (TodoForm),
//  enabling communication between the two components.

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 78% 20%;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  grid-gap: 2%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 1rem;
    // Adjust styles for smaller screens (sm)
  }
`;
const Button = styled.button`
  padding: 15px 5px;
`;
export default TodoForm;

// TodoForm.jsx is a React component that renders a form for adding new todo items.It utilizes the useState hook to manage the state of the input field value.

// The component receives the addTodo function as a prop from its parent component, TodoWrapper.This function is responsible for adding a new todo item to the todos state array.

// The TodoForm component consists of an HTML form element with an input field and a submit button.The value of the input field is controlled by the value state variable, which is initialized as an empty string.The onChange event handler updates the value state whenever the input field's content changes.

// When the form is submitted, the handleSubmit function is triggered.It prevents the default form submission behavior using e.preventDefault().Then, it calls the addTodo function (received as a prop) with the current value state as the parameter, adding a new todo item.After adding the todo, the value state is reset to an empty string.
