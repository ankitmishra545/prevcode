import React, { useEffect, useState } from 'react'
import { dataObservable$ } from '../ServicePage'

export let buttonValue = false;

function ComponentOne() {

  const [value, setValue] = useState([]);

 const observer = {
    next: res => {
      console.log(res.comments)
      setValue(res.comments);
    },
    error: error => {
      console.log(error)
    },
    complete: () => {
      console.log("Completed")
    }
  }
    dataObservable$.subscribe(observer);

  return (
    <div>
      {/* <button onClick={() => {getData()}}>Get Data</button> */}
      {value.map((object, index) => {
        return <div key={index}>
          <strong>{object.id}</strong>
          <p>{object.body}</p>
        </div>
      })}
    </div>
  )
}

export default ComponentOne