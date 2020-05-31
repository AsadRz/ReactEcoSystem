import React from 'react';
import { Paper, Button, Grid } from '@material-ui/core';

const TodoListItem = (todo) =>
{
    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={2} md={2}></Grid>
                <Grid xs={8} md={8} item style={{ paddingRight: 16 }}>
                    <h3>{todo.todo.text}</h3>
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                        fullWidth
                        color="secondary"
                        variant="contained"
                    >
                        Remove
                    </Button>
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                    >
                        Complete
                    </Button>
                </Grid>
            </Grid>
        </Paper >
    )
};

export default TodoListItem;