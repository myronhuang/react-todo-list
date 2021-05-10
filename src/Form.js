import React from 'react';
import { InputBase, InputAdornment, Paper, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import useStyles from "./styles/FormStyles";
import useInputState from "./hooks/useInputState";

const Form = ({addNewTodo}) => {

    const classes = useStyles();
    const [value, handleValueChange,reset] = useInputState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTodo(value, false);
        reset();
    }
    return (
        <Paper elevation={0}
               component="form"
               className={classes.root}
               onSubmit={(e) => handleSubmit(e)}>
            <InputAdornment className={classes.iconButton} aria-label="plus">
                <AddIcon />
            </InputAdornment>
            <InputBase
                className={classes.input}
                placeholder="Enter a new todo"
                inputProps={{ 'aria-label': 'enter a new todo' }}
                value={value}
                onChange={handleValueChange}
            />
            <IconButton type="submit"
                        className={classes.iconButton}
                        aria-label="submit"
                        >
                <SendIcon />
            </IconButton>
        </Paper>
    );
}

export default Form;