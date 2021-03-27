import React, { useReducer, useEffect, useRef } from 'react';

import appReducer from './reducer';
import Context from './context';
import { RESET } from './types';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function useEffectOnce(cb) {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      cb();
      didRun.current = true;
    }
  });
}

function App() {
  const [items, dispatch] = useReducer(appReducer, []);

  // a fancy componentDidMount via a custom hook
  // using this instead of useEffect with empty array to utilize useRef
  useEffectOnce(() => {
    const rawData = localStorage.getItem('data');
    dispatch({ type: RESET, payload: JSON.parse(rawData)});
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(items));
  }, [items]);

  return (
    <Context.Provider value={dispatch}>
      <Header />
      <TodoForm />
      <TodoList items={items} />
    </Context.Provider>
  );
}

export default App;
