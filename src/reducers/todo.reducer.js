import { v4 as uuidv4 } from "uuid";


const reducer = (state, action) => {
switch(action.type){
 case "ADD":
   return [...state,{id: uuidv4(),task: action.task,completed: false,}];
 case "REMOVE":
   return state.filter((eachTodos) => eachTodos.id !== action.id);
  case "TOGGLE":
    return state.map((eachTodos) =>eachTodos.id === action.id ? {...eachTodos,completed: !eachTodos.completed}: eachTodos);
  case "CHANGEorEDIT":
    return state.map((eachTodos) =>eachTodos.id === action.id? {...eachTodos,task: action.newTask}: eachTodos);
  default :
    return state;
}
};
export default reducer;


// const addTodo = (addText) => {
//  setTodos([...todos,{id: uuidv4(),task: addText,completed: false}]);
// };

// const removeTodo = (selectedTodoId) => {
//  const refreshTodos = todos.filter((eachTodos) => eachTodos.id !== selectedTodoId);
//  setTodos(refreshTodos);
// };



// const toggleTodo = (selectedTodoId) => {
//  const updateTodos = todos.map((eachTodos) =>eachTodos.id === selectedTodoId ? {...eachTodos,completed: !eachTodos.completed}: eachTodos);
//  setTodos(updateTodos);
// };


// const changeTodo = (selectedTodoId,newTask) => {
//  const updateTodos = todos.map((eachTodos) =>eachTodos.id === selectedTodoId ? {...eachTodos,task: newTask}: eachTodos);
//  setTodos(updateTodos);
// };
