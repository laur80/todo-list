import {useState} from 'react'
import { v4 as uuidv4 } from "uuid";

function useTodoState(initialTodos) {

 const [todos, setTodos] = useState(initialTodos);

 const addTodo = (addText) => {
  setTodos([
    ...todos,
    {
      id: uuidv4(),
      task: addText,
      completed: false,
    },
  ]);
};

const removeTodo = (selectedTodoId) => {
  const refreshTodos = todos.filter(
    (eachTodos) => eachTodos.id !== selectedTodoId
  );
  setTodos(refreshTodos);
};

const toggleTodo = (selectedTodoId) => {
  const updateTodos = todos.map((eachTodos) =>
    eachTodos.id === selectedTodoId
      ? {
          ...eachTodos,
          completed: !eachTodos.completed,
        }
      : eachTodos
  );
  setTodos(updateTodos);
};

const changeTodo = (selectedTodoId,newTask) => {
  const updateTodos = todos.map((eachTodos) =>
    eachTodos.id === selectedTodoId
      ? {
          ...eachTodos,
          task: newTask,
        }
      : eachTodos
  );
  setTodos(updateTodos);
};


 return {
  todos,
  addTodo:addTodo,
  removeTodo:removeTodo,
  toggleTodo:toggleTodo,
  changeTodo:changeTodo


 }
}

export default useTodoState
