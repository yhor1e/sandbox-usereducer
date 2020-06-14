import React, { useState, useReducer, useEffect } from 'react';

const App = (props) => {
  const initialState = { value: 0, dummy: true };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        if (state.value % 3 === 0) {
          return { value: state.value + 1, dummy: !state.dummy };
        }
        return { ...state, ...{ value: state.value + 1 } };
      default:
        throw new Error();
    }
  };

  const [state, dispach] = useReducer(reducer, { value: 0, dummy: true });

  useEffect(() => {
    console.log(
      '[useEffect1]          useEffect has no depnedency.          state.value: ' +
        state.value
    );
    return () => {
      console.log(
        '[useEffect1 callback] useEffect has no depnedency.          state.value: ' +
          state.value
      );
    };
  });

  useEffect(() => {
    console.log(
      '[useEffect2]          useEffect has [] depnedency.          state.value: ' +
        state.value
    );
    return () => {
      console.log(
        '[useEffect2 callback] useEffect has [] depnedency.          state.value: ' +
          state.value
      );
    };
  }, []);

  useEffect(() => {
    console.log(
      '[useEffect3]          useEffect has state.dummy depnedency. state.value: ' +
        state.value
    );
    return () => {
      console.log(
        '[useEffect3 callback] useEffect has state.dummy depnedency. state.value: ' +
          state.value
      );
    };
  }, [state.dummy]);

  return (
    <>
      <h1>{props.heading}</h1>
      <p>state.value {state.value}</p>
      <p>state.dummy {state.dummy.toString()}</p>
      <button
        onClick={() => {
          console.log('-------- clicked --------');
          dispach({ type: 'increment' });
        }}
      >
        +1
      </button>
    </>
  );
};

export default App;
