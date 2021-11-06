// import './App.css';

import { CreateTodoButton } from "./CreateTodoButton";
import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";

const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar agua', completed: false},
  {text: 'blabla', completed: false}
];


function App() {
  return (
    <>
      <TodoCounter />
  
      <TodoSearch />
  
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
          />
        ))}
      </TodoList>
  
      <CreateTodoButton /> 
    </>
  );
}

export default App;
