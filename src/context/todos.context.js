import todoReducer from "../reducers/todo.reducer"
import React,{createContext, useReducer} from 'react'
import useTodoState from "../hooks/useTodoState"

const defaultTodos=[
 {id:1, task:"learn", completed: true },
 {id:2, task:"work", completed: false }
];
export const TodosContext=createContext();

export function TodosProvider(props) {
 const [todos,dispatch] = useReducer(todoReducer,defaultTodos);
 
  return (
   <TodosContext.Provider value={{todos,dispatch}}>
    {props.children}
   </TodosContext.Provider>
  )
 }
