import React, { useReducer } from 'react'

interface stateProps {
  count: number
}

type mathProps = {
  type: "increment" | "decrement";
  payload: number;
}

type resetProps = {
  type: "reset";
}

type actionProps = mathProps | resetProps;

const initialState = {
  count: 0
}

const reducer = (currentState: stateProps, action: actionProps) => {
  switch(action.type) {
    case 'increment': 
      return {...currentState, count: currentState.count + action.payload }
    case 'decrement': 
      return {...currentState, count: currentState.count - action.payload }
    case 'reset': 
      return initialState
  }
}

const UseReducerHook = () => {

const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p> Counter = {state.count} </p>
      <button onClick={() => dispatch({type: "increment", payload: 10} )}>Increment</button>
      <button onClick={() => dispatch({type: "decrement", payload: 10})}>Decrement</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  )
}

export default UseReducerHook
