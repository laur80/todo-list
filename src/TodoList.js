import React from 'react';
// import ListItem from "@material-ui/core/ListItem";
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import ListItemText from "@material-ui/core/ListItemText";

function TodoList({ todos, removeTodo, toggleTodo,changeTodo }) {
 if(todos.length)
  return (
    <Paper>
      <List>
        {todos.map((todo,i) => (
          <>
            <Todo
              id={todo.id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              changeTodo={changeTodo}
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
            />
            {i < todos.length -1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
  return null;
}

export default TodoList;
