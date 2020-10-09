
import React,{createContext} from 'react'
import useTodoState from "../hooks/useTodoState"

const defaultTodos=[
 {id:1, task:"learn", completed: true },
 {id:2, task:"work", completed: false }
];
export const TodosContext=createContext();

export function TodosProvider(props) {
 const stuff = useTodoState(defaultTodos);
 
  return (
   <TodosContext.Provider value={stuff}>
    {props.children}
   </TodosContext.Provider>
  )
 }
