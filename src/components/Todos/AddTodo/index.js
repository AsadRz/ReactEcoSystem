import React, { useState } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { createTodo } from '../../../actions';

const AddTodo = ({ todos, onCreatePressed }) =>
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
                        onKeyPress={todos.onInputKeyPress}
                        fullWidth
                    />
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={() =>
                        {
                            if (inputValue !== "") {
                                const isDuplicateText = todos.some(todo => todo.text === inputValue)
                                if (!isDuplicateText) {
                                    onCreatePressed(inputValue);
                                    setInputValue('');
                                }
                            }
                        }}
                    >
                        ADD
        </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

const mapStatetoProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStatetoProps, mapDispatchToProps)(AddTodo);