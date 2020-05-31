import React from 'react';
import TodoListItem from '../TodoListItem';
import { connect } from 'react-redux';
import { removeTodo } from '../../../actions';

const TodoList = ({ index, todos, onRemovePressed }) =>
{
    return (
        <div>
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} key={index} />)}
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);