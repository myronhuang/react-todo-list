import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import useStyles from './styles/TodoAppStyles';
import Header from "./Header";
import TodoList from "./TodoList";
import Form from "./Form";
import useTodoState from "./hooks/useTodoState";
import { DragDropContext } from'react-beautiful-dnd';

const TodoApp = () => {

    const classes = useStyles();

    const defaultTodos = [{id: 1, text: "I am a todo", completed: false},
                          {id: 2, text: "Click the checkbox to mark as complete", completed: true},
                          {id: 3, text: "Drag and drop todos to reorder", completed: false}];

    const [todos, setTodos, addNewTodo, toggleChecked, removeTodo] = useTodoState("todos", defaultTodos);

    const onDragEnd = (result) => {
        const {destination, source} = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        const newTodos = todos;
        const dropped = newTodos.splice(source.index, 1);
        newTodos.splice(destination.index, 0, dropped[0]);

        setTodos(newTodos);

        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

    return (
        <Paper elevation={3} className={classes.paper}>
            <Grid container
                  direction='column'
                  justify='center'>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <DragDropContext
                        onDragEnd={onDragEnd}>
                        <TodoList todos={todos}
                                  toggleChecked={toggleChecked}
                                  removeTodo={removeTodo}
                        />
                    </DragDropContext>
                </Grid>
                <Grid item>
                    <Form addNewTodo={addNewTodo}/>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;