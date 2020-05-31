import React from 'react';

const TodoListItem = (props) =>
{
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark as Complete</button>
            <button className="remove-button ">Remove</button>
        </div>
    </div>
};

export default TodoListItem;