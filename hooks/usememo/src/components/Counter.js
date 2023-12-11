import React, { useMemo, useState } from 'react'

function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const counterOneIncrement = () => {
        setCounterOne(counterOne+1)
    }

    const counterTwoIncrement = () => {
        setCounterTwo(counterTwo+1)
    }

    const isEven = useMemo(() => {
        let i=0;
        while(i<2000000000) i++
        return counterOne % 2 == 0;
    },[counterOne])

  return (
    <div>
        <div>
            <button onClick={counterOneIncrement}>Count one- {counterOne}</button>
            <span>{isEven ? "Even" : "Odd"}</span>
        </div>
        <div>
            <button onClick={counterTwoIncrement}>Count two- {counterTwo}</button>
        </div>
    </div>
  )
}

export default Counter