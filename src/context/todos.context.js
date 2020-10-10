import todoReducer from "../reducers/todo.reducer"
import React,{createContext, useReducer} from 'react'


const defaultTodos=[
 {id:1, task:"learn", completed: true },
 {id:2, task:"work", completed: false }
];
export const TodosContext=createContext();
export const DispatchContext=createContext();

export function TodosProvider(props) {
 const [todos,dispatch] = useReducer(todoReducer,defaultTodos);
 
  return (
   <TodosContext.Provider value={todos}>
   <DispatchContext.Provider value={dispatch}>
    {props.children}
   </DispatchContext.Provider>
   </TodosContext.Provider>
  )
 }
