import React, { useState,useEffect } from "react";
import TodoList from "./TodoList";
// import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
// import { Divider } from '@material-ui/core';
// import { light } from '@material-ui/core/styles/createPalette';
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || "[]";
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
   window.localStorage.setItem("todos",JSON.stringify(todos));
    
  }, [todos]);

  const addTodo = (addText) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: addText,
        completed: false,
      },
    ]);
  };

  const removeTodo = (selectedTodoId) => {
    const refreshTodos = todos.filter(
      (eachTodos) => eachTodos.id !== selectedTodoId
    );
    setTodos(refreshTodos);
  };

  const toggleTodo = (selectedTodoId) => {
    const updateTodos = todos.map((eachTodos) =>
      eachTodos.id === selectedTodoId
        ? {
            ...eachTodos,
            completed: !eachTodos.completed,
          }
        : eachTodos
    );
    setTodos(updateTodos);
  };

  const changeTodo = (selectedTodoId,newTask) => {
    const updateTodos = todos.map((eachTodos) =>
      eachTodos.id === selectedTodoId
        ? {
            ...eachTodos,
            task: newTask,
          }
        : eachTodos
    );
    setTodos(updateTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar
        color="primary"
        position="static"
        style={{
          height: "64px",
        }}
      >
        <Toolbar>
          <Typography color="inherit"> TODOS WITH HOOKS </Typography>{" "}
        </Toolbar>
      </AppBar>
      <Grid
        container
        justify="center"
        style={{
          marginTop: "1rem",
        }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            changeTodo={changeTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
