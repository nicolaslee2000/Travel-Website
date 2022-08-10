import React from 'react';

const TodoItem = (props) => {
    const {todo, updateTodo, deleteTodo } = props;
    return (
        <div className='todo' key={todo.id}>
          <h3>
            <label className={todo.completed ? 'completed': null} onClick = {updateTodo}>
              {todo.todoname}
            </label>

            <label onClick={deleteTodo}>&nbsp;&nbsp;&nbsp;삭제</label>
          </h3>
      </div>
    );
};

export default TodoItem;