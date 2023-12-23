import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      {/* The TodoWrapper.jsx component serves as the parent component that holds
      the todos state and the addTodo function.It renders the TodoForm component
      and passes down the addTodo function as a prop.The TodoForm component
      utilizes the value state to control the input field and triggers the
      handleSubmit function when the form is submitted, calling the addTodo
      function with the input value.When a new todo is added via the form, it
      triggers a re-render in TodoWrapper with the updated todos state. The
      TodoWrapper component also maps over the todos array and renders either
      the EditTodoForm or AddedTodo component based on the value of the
      isEditing property of each todo item.If isEditing is true, it renders the
      EditTodoForm component and passes the editTask function as a prop to allow
      the EditTodoForm component to update the task of the todo item.If
      isEditing is false, it renders the AddedTodo component and passes the
      toggleComplete, deleteTodo, and editTodo functions as props to allow the
      AddedTodo component to toggle the completion status, delete the todo item,
      and edit the todo item respectively. The TodoForm component is responsible
      for rendering the form input field and handling the submission of new
      todos.It utilizes the useState hook to manage the value of the input field
      and the handleChange function to update the value as the user types.The
      handleSubmit function is triggered when the form is submitted and calls
      the addTodo function with the current value of the input field. The
      EditTodoForm component is responsible for rendering the form input field
      for editing a todo item.It utilizes the useState hook to manage the value
      of the input field and the handleChange function to update the value as
      the user types.The handleSubmit function is triggered when the form is
      submitted and calls the editTodo function with the updated task value. The
      AddedTodo component is responsible for rendering a single todo item.It
      displays the task value and provides buttons for toggling the completion
      status, deleting the todo item, and editing the todo item.It triggers the
      toggleComplete, deleteTodo, and editTodo functions when the corresponding
      buttons are clicked. */}
    </div>
  );
}

export default App;
