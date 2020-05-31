import React, { useState } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';

const AddTodo = props =>
{
    const [inputValue, setInputValue] = useState('');
    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        placeholder="Add Todo here"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyPress={props.onInputKeyPress}
                        fullWidth
                    />
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={props.onButtonClick}
                    >
                        ADD
        </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTodo;