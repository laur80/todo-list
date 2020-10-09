import React, { useContext } from 'react';
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./context/todos.context";

function EditTodoForm({id,task,toggle}) {
 const [value, handleChange, reset] = useInputState(task)
 const {changeTodo} =useContext(TodosContext);
 return (
  <form 
  onSubmit={(e)=>{
   e.preventDefault();
   changeTodo(id,value);
   reset();
   toggle();
  }}
  style={{ marginLeft: "1rem", width:"50%" }}
  >
  <TextField 
  
    value={value} 
    onChange={handleChange}
    margin='normal'
    fullWidth
    autoFocus
   />
   </form>
  )
 }
   
  

export default EditTodoForm
