import './App.css';
import React, { useState } from 'react'
import { Observable } from 'rxjs';

function App() {

 let dataName;

  const agents = new Observable((observer) => {
    try{
      observer.next("Ram");

      setInterval(() => {
        observer.next("Sita");
      },3000)

      setInterval(() => {
        observer.next("Laxman");
      },7000)     
    }catch(e){
      observer.error(e);
    }

  //   console.log("hello!")
  // for (let i = 0; i < 5; i++) observer.next(i)
  // observer.complete();

  })

  

  agents.subscribe((data) => {
    // console.log(data);
    dataName = data;
  })
  
  return (
    <div className="App">
      <p>{dataName}</p>
    </div>
  );
}

export default App;
