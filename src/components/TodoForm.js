import React, { useState, useContext } from 'react';

import Context from '../context';
import { ADD_TODO } from '../types';

function TodoForm() {
  const dispatch = useContext(Context);
  const [text, setText] = useState('');

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: text });
    setText('');
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="text" value={text} onChange={handleOnChange} />
      <input type="submit" />
    </form>
  );
}

export default TodoForm;
