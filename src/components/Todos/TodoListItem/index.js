import React from 'react';
import { Paper, Button, Grid } from '@material-ui/core';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) =>
{
    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={2} md={2} item></Grid>
                <Grid xs={8} md={8} item style={{ paddingRight: 16 }}>
                    <h3>{todo.text}</h3>
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                        fullWidth
                        color="secondary"
                        variant="contained"
                        onClick={() =>
                        {
                            onRemovePressed(todo.text)
                        }}
                    >
                        Remove
                    </Button>
                </Grid>
                {
                    todo.isCompleted === true ? null :
                        <Grid xs={2} md={1} item>
                            <Button
                                fullWidth
                                color="primary"
                                variant="contained"
                                onClick={() =>
                                {
                                    onCompletedPressed(todo.text)
                                }}
                            >
                                Complete
                    </Button>
                        </Grid>
                }
            </Grid>
        </Paper >
    )
};

export default TodoListItem;