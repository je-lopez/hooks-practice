import React, { useContext, useState } from 'react';

import Context from '../context';
import { COMPLETE_TODO, EDIT_TODO, DELETE_TODO } from '../types';

function TodoItem({ id, text, completed }) {
  const dispatch = useContext(Context);
  const [editable, setEditable] = useState(false);
  const [editedText, setEditedText] = useState(text);

  function handleCheckboxChange() {
    dispatch({ type: COMPLETE_TODO, payload: id});
  }

  function handleEditClick() {
    if (text !== editedText) {
      dispatch({ type: EDIT_TODO, payload: {id, editedText} });
    }

    setEditable(!editable);
  }

  function handleDeleteClick() {
    dispatch({ type: DELETE_TODO, payload: id });
  }

  function handleInputChange(e) {
    setEditedText(e.target.value);
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      <input className={!editable ? 'editable-input' : ''} type="text" value={editedText} readOnly={!editable} onChange={handleInputChange} />
      <button onClick={handleEditClick}>{editable ? 'Confirm' : 'Edit'}</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default TodoItem;
