import React, { useReducer } from 'react'

    const initialState = {
        firstCounter: 0,
        secondCounter: 10,
    }

    const reducer = (state, action) => {
        switch(action.type){
            case "increment":
                return {...state, firstCounter: state.firstCounter + action.value};
            
            case "decrement":
                return {...state, firstCounter: state.firstCounter - action.value};

            case "reset":
                return initialState;
                
            case "increment2":
                return {...state, secondCounter: state.secondCounter + action.value};
            
            case "decrement2":
                return {...state, secondCounter: state.secondCounter - action.value};

            default: return state;
        }
    }

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>
            <p>{count.firstCounter}</p>
            <p>{count.secondCounter}</p>
        </div>
        <div>
            <button onClick={() => {dispatch({type: "increment", value: 1})}}>Increment</button>
            <button onClick={() => {dispatch({type: "decrement", value: 1})}}>Decrement</button>
        </div>
        <div>
            <button onClick={() => {dispatch({type: "increment", value: 5})}}>Increment 5</button>
            <button onClick={() => {dispatch({type: "decrement", value: 5})}}>Decrement 5</button>
        </div>
        <div>
            <button onClick={() => {dispatch({type: "increment2", value: 1})}}>Increment</button>
            <button onClick={() => {dispatch({type: "decrement2", value: 1})}}>Decrement</button>
        </div>
        <button onClick={() => {dispatch("reset")}}>Reset</button>
    </div>
  )
}

export default CounterTwo