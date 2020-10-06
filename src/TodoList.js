import React from 'react'
// import ListItem from "@material-ui/core/ListItem";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
// import ListItemText from "@material-ui/core/ListItemText";


function TodoList({todos,removeTodo}) {
    return (
        <Paper>
            <List>
                {todos.map(todo=>(
                    <>
                    
                    <Todo 
                    id={todo.id}
                    removeTodo={removeTodo}
                    key={todo.id}
                     task={todo.task} 
                     completed={todo.completed}/>
                    <Divider/>
                    </>
                ))}
            </List>
        </Paper>
    )
}

export default TodoList
