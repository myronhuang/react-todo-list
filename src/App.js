import React from 'react';
import {Container} from "@material-ui/core";
import TodoApp from './TodoApp';
import useStyles from './styles/AppStyles';

function App() {
    const classes = useStyles();

    return (
      <Container className={classes.root}>
        <TodoApp />
      </Container>
    );
}

export default App;
