import React from 'react';
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm({id,task,changeTodo,toggle}) {
 const [value, handleChange, reset] = useInputState(task)
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
