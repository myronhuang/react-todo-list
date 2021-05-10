import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { GrayCheckBox, useStyles } from "./styles/TodoStyles";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Draggable } from 'react-beautiful-dnd';
import Typography from '@material-ui/core/Typography';


const Todo = ({id, text, completed, index, toggleChecked, removeTodo}) => {

    const classes = useStyles(completed);

    return (
        <Draggable draggableId={`${id}`} index={index}>
            {(provided) => (
                <ListItem className={classes.root}
                          role="todo item"
                          dense
                          button
                          divider
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}>
                    <ListItemIcon>
                        <GrayCheckBox
                            tabIndex={-1}
                            disableRipple
                            checked={completed}
                            onClick={() => toggleChecked(id)}
                        />
                    </ListItemIcon>
                    <ListItemText primary={
                        <>
                            <Typography
                                className={classes.text}
                                component="span"
                                variant="body2"
                            >
                                {text}
                            </Typography>
                        </>}/>
                    <ListItemIcon>
                        <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon className={classes.delete}/>
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
            )}
        </Draggable>
    );
}

export default Todo;