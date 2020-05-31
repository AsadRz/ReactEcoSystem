import React from 'react';
import TodoListItem from '../TodoListItem';
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from '../../../actions';

const TodoList = ({ index, todos, onRemovePressed, onCompletedPressed }) =>
{
    return (
        <div>
            {todos.map(todo =>
                <TodoListItem
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                    key={index} />)}
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);