import './App.css';
import CounterOne from './component/CounterOne';
import CounterThree from './component/CounterThree';
import CounterTwo from './component/CounterTwo';
import DataFetchingOne from './component/DataFetchingOne';
import DataFetchingTwo from './component/DataFetchingTwo';
import A from './component/reducercontext/A';
import { createContext, useReducer } from 'react';

export const CountContext = createContext(); 

  let initialState = 0;

  const reducer = (state, action) => {
    switch(action){
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;

      case "reset":
        return initialState;

      default: return state;
    }
  };

function App() {

  const [count, dispatch]= useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch }}>
        <A/>
      </CountContext.Provider>       */}
      {/* <DataFetchingOne/> */}
      <DataFetchingTwo/>
    </div>
  );
}

export default App;
