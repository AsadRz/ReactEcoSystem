import React from 'react';
import AddTodo from '../Todos/AddTodo';
import TodoList from '../Todos/TodoList';

const MainContent = (props) =>
{
    return (
        <React.Fragment>
            <AddTodo />
            <TodoList />
        </React.Fragment>
    )
}

export default MainContent;