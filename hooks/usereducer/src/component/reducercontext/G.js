import React, { useContext } from 'react'
import { CountContext } from '../../App'

function G() {

  const countContext = useContext(CountContext);

  return (   

    <div>G
      <strong>{countContext.countState}</strong>
      <button onClick={() => {countContext.countDispatch("increment")}}>Increment</button>
      <button onClick={() => {countContext.countDispatch("decrement")}}>Decrement</button>
      <button onClick={() => {countContext.countDispatch("reset")}}>Reset</button>
    </div>
  )
}

export default G