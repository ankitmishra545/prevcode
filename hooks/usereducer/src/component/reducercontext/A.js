import React, { useContext } from 'react'
import B from './B'
import C from './C'
import D from './D'
import { CountContext } from '../../App'

function A() {

  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>Count- {countContext.countState} </h1>
        <B/>
        <C/>
        <D/>
    </div>
  )
}

export default A