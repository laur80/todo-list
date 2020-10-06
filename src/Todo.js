
import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({id,task,completed,removeTodo,toggleTodo,changeTodo}) {
    const [editing,toggle]=useToggleState(false); 
    return (
        <ListItem style={{height:"64px"}}>
        {editing ? (<EditTodoForm id={id} task={task} toggle={toggle} changeTodo={changeTodo}/> 
        ):(
        <>
        <Checkbox checked={completed} tabIndex={-1} onClick={()=>toggleTodo(id)}/>
        <ListItemText style={{textDecoration :completed ? "line-through" : "none"}}>{task}</ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={()=>removeTodo(id)}>
                <DeleteIcon/>
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
                <EditIcon/>
            </IconButton>
        </ListItemSecondaryAction>
        </>)
    }
        </ListItem>
    )
}

export default Todo