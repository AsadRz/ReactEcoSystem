import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';

const Header = (props) =>
{
    const classes = useStyles();
    return (
        <AppBar className={classes.root} color="primary" position="static" >
            <Toolbar className={classes.root}>
                <Typography color="inherit" className={classes.title}>TODO APP</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;