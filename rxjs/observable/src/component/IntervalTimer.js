import React from 'react'
import { printList } from './ServicePage'
import { interval, timer } from 'rxjs'

function IntervalTimer() {

  const intervalValue = interval(2000);
  const timerValue = timer(5000, 1000)

  let message;
  let message2;

  intervalValue.subscribe(res => {
    console.log(res)
    message = "meaasage " + res;
    printList(message,'listContainer');
  })

  timerValue.subscribe(res => {
    console.log(res)
    message2 = "meaasage " + res;
    printList(message2,'listContainer2');
  })
  
  return (
    <div className='allDiv'>
      <div>
        <h1>Interval Timer</h1>
        <div className='col-md-10'>
            <div className='card'>
              <div className='card-header'>Interval</div>
              <div className='card-body'>
                <ul id='listContainer'></ul>
              </div>
            </div>
        </div>
      </div>
      <div>
        <h1>Interval Timer</h1>
        <div className='col-md-10'>
            <div className='card'>
              <div className='card-header'>Timer</div>
              <div className='card-body'>
                <ul id='listContainer2'></ul>
              </div>
            </div>
        </div> 
      </div>      
    </div>
  )
}

export default IntervalTimer