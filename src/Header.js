import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles/HeaderStyles';

const Header = () => {

    const classes = useStyles();

    const date = new Date();


    return (
        <Paper className={classes.root} elevation={0}>
            <Typography className={classes.heading} variant="h3" component="h1">
                My Todos
            </Typography>
            <Typography className={classes.subheading} variant="caption" component="h3">
                {date.toDateString()}
            </Typography>
        </Paper>
    );
}

export default Header;