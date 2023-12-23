import TodoForm from "./TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddedTodo from "./AddedTodo";
import EditTodoForm from "./EditTodoForm";

uuidv4();
function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  // State Initialization:
  // const [todos, setTodos] = useState([]);
  // Initializes the todos state variable as an empty array to store todo items.
  // setTodos is the function used to update the todos state.

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  //  addTodo Functionality:
  //   This function is responsible for adding a new todo item to the todos state array.
  // It takes a todo parameter, which represents the task to be added.
  // Inside the function, the setTodos function is called to update the todos state.
  // The setTodos function is called with a new array that includes the existing todos spread using the spread operator (...todos), and a new todo object.
  // The new todo object has properties such as id, task, completed, and isEditing.
  // The id is generated using the uuidv4 function, which generates a unique identifier for each todo item.
  // The task property is set to the value of the todo parameter passed to the addTodo function.
  // The completed property is initialized as false, indicating that the todo item is not completed.
  // The isEditing property is initialized as false, indicating that the todo item is not being edited.
  // After adding the new todo item, the console.log statement is used to log the updated todos state to the console.
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //   toggleComplete function:

  // This function is responsible for toggling the completed property of a todo item.
  // It takes an id parameter, which represents the id of the todo item to be toggled.
  // Inside the function, the setTodos function is called to update the todos state.
  // The setTodos function is called with a new array created by mapping over the existing todos array.
  // For each todo item, if the id matches the provided id, the completed property is toggled using the ! operator.
  // If the id does not match, the todo item remains unchanged.
  // The updated array is then set as the new todos state.

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // deleteTodo function:

  // This function is responsible for deleting a todo item from the todos state array.
  // It takes an id parameter, which represents the id of the todo item to be deleted.
  // Inside the function, the setTodos function is called to update the todos state.
  // The setTodos function is called with a new array created by filtering the existing todos array.
  // The filter function checks each todo item and keeps only the items whose id does not match the provided id.
  // The updated array is then set as the new todos state.

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // editTodo function:

  // This function is responsible for toggling the isEditing property of a todo item.
  // It takes an id parameter, which represents the id of the todo item to be edited.
  // Inside the function, the setTodos function is called to update the todos state.
  // The setTodos function is called with a new array created by mapping over the existing todos array.
  // For each todo item, if the id matches the provided id, the isEditing property is toggled using the ! operator.
  // If the id does not match, the todo item remains unchanged.
  // The updated array is then set as the new todos state.

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  //   The editTask function in the TodoWrapper.jsx file is responsible for editing a specific todo item in the todos state array.It takes two parameters: task (representing the updated task) and id (representing the id of the todo item to be edited).
  // Inside the editTask function, the setTodos function is called to update the todos state.It uses the map function to iterate over each todo item in the todos array.

  // For each todo item, it checks if the id of the current todo item matches the id parameter passed to the editTask function.If there is a match, it creates a new todo object using the spread operator ({ ...todo }) to copy all the existing properties of the todo item.

  // The task property of the new todo object is updated with the value of the task parameter passed to the editTask function.The isEditing property is toggled by negating its current value using the ! operator.

  // If there is no match between the id of the current todo item and the id parameter, the todo item remains unchanged.

  // Finally, the setTodos function is called with the updated todos array, which includes the edited todo item.This updates the todos state, triggering a re-render of the component with the updated todo item.

  // In summary, the editTask function updates the todos state by modifying a specific todo item's task property and toggling its isEditing property.This allows for editing a todo item in the todos state array.
  return (
    <div id="todo-wrapper">
      <h1 id="header">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {/* Props Usage: Passing Props: Renders the TodoForm component and passesii the
      addTodo function as a prop: <TodoForm addTodo={addTodo} />. Allows
      TodoForm to access and utilize the addTodo function defined in
      TodoWrapper. */}
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={index} editTodo={editTask} task={todo} />
        ) : (
          <AddedTodo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
      {/* The todos.map() function is used to iterate over each todo item in the
      todos array.For each todo item, it checks the value of the isEditing
      property. If todo.isEditing is true, it renders the EditTodoForm
      component.It passes the following props to the EditTodoForm component:
      key: The index value is used as the key to uniquely identify each rendered
      component. editTodo: The editTask function is passed as a prop to allow
      the EditTodoForm component to update the task of the todo item. task: The
      entire todo object is passed as a prop to provide the initial task value
      for editing. If todo.isEditing is false, it renders the AddedTodo
      component.It passes the following props to the AddedTodo component: task:
      The entire todo object is passed as a prop to display the task value. key:
      The index value is used as the key to uniquely identify each rendered
      component. toggleComplete: The toggleComplete function is passed as a prop
      to allow the AddedTodo component to toggle the completion status of the
      todo item. deleteTodo: The deleteTodo function is passed as a prop to
      allow the AddedTodo component to delete the todo item. */}
    </div>
  );
}
// TodoWrapper serves as the parent component that holds the todos state and the addTodo function.
// It renders the TodoForm component and passes down the addTodo function as a prop.
// TodoForm utilizes the value state to control the input field and triggers the handleSubmit function when the form is submitted,
//  calling the addTodo function with the input value.
// When a new todo is added via the form, it triggers a re-render in TodoWrapper with the updated todos state.

export default TodoWrapper;
