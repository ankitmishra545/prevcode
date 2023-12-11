import React, { useRef } from 'react'
import { fromEvent, throttleTime } from 'rxjs';
import { scan } from 'rxjs';


function ComponentTwo() {

  const elementRef = useRef();

  const clickMe = () => {
    fromEvent(document,'click').pipe(       
      throttleTime(3000), 
      scan(count => count + 1, 0),
    ).subscribe((count) => {
      console.log(count)
      elementRef.current.innerHTML = `Clicked ${count} times`;
    })
    
}
  return (
    <div>
      <button onClick={() => {clickMe()}}>Click</button>
      <h1 ref={elementRef}></h1>
    </div>
  )
}

export default ComponentTwo