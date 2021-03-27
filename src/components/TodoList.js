import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ items }) {
  return (
    <div className="todo-list">
      {items.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default TodoList;
