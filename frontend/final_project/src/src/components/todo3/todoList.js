import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './todoItem';




const TodoList = () => {
    const todos = useSelector((todos) => todos);
    const dispatch = useDispatch();
    
    const updateTodo = (id) => {
        dispatch({type : 'UPDATE', id: id})
    }

    const deleteTodo = (id) => {
        dispatch({type: "DELETE", id: id});
    }

    return (
       <>
        {todos ? todos.map((todo) => {
            return ( <TodoItem 
                key={todo.id} 
                todo={todo}
                updateTodo={()=> updateTodo(todo.id)}
                deleteTodo={()=> deleteTodo(todo.id)}
            />);
            }):null}
       </>
    );
};

export default TodoList;