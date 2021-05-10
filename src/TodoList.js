import React from 'react';
import useStyles from './styles/TodoListStyles';
import { List } from '@material-ui/core';
import { Droppable } from 'react-beautiful-dnd';
import Todo from './Todo';

const TodoList = ({todos, toggleChecked, removeTodo, editTodo}) => {

    const classes = useStyles();

    return (
        <Droppable droppableId="todo-list">
            {(provided) =>
                <List className={classes.root}
                      innerRef={provided.innerRef}
                      {...provided.droppableProps}>
                    {todos.map((todo, index) => (
                        <React.Fragment key={todo.id}>
                            <Todo {...todo}
                                  index={index}
                                  toggleChecked={toggleChecked}
                                  removeTodo={removeTodo}
                                  editTodo={editTodo}/>
                        </React.Fragment>
                    ))}
                    {provided.placeholder}
                </List>
            }
        </Droppable>
    );
};

export default TodoList;