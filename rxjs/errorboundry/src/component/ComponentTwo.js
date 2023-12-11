import React, { useState } from 'react'

function ComponentTwo() {

    let [count, setCount] = useState(0);

    const incrementCount = () => {
        console.log("before " + count)
        setCount(count++);
        console.log("after " + count)
    }  

    
    // if(count === 3){
    //     throw new Error("error occured")
    // }

    // 
  return (
    <div>ComponentTwo
        <button onClick={() => {incrementCount()}}>Increment</button>
    </div>
  )
}

export default ComponentTwo