import todoReducer from "../reducers/todo.reducer"
import React, {createContext} from 'react'
import useLocalStorage from "../hooks/useLocalStorageState"

const defaultTodos=[
 {id:1, task:"learn", completed: true },
 {id:2, task:"work", completed: false }
];
export const TodosContext=createContext();
export const DispatchContext=createContext();

export function TodosProvider(props) {
 const [todos,dispatch] = useLocalStorage("todos",defaultTodos,todoReducer);
 
  return (
   <TodosContext.Provider value={todos}>
   <DispatchContext.Provider value={dispatch}>
    {props.children}
   </DispatchContext.Provider>
   </TodosContext.Provider>
  )
 }
