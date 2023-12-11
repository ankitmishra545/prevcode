
// import React from "react";
// import { Observable } from "rxjs";

const { Observable } = require("rxjs"); // if we want to run in node

let count = 0;

const observable = new Observable((subscriber) => {
    // subscriber.next(1);
    setInterval(() => {
        subscriber.next(++count)
    }, 1000);
    // subscriber.next(3);
    // setTimeout(() => {
    //     subscriber.next(4)
    // }, 10000);
    // subscriber.next(5);
  })
  
  const observer = {
    next: value => {
        // console.log("Observer got value: " + value);
    },
    complete: () => {
        console.log("Observer got a complete notification");
    },
    error: err => {
        console.log("Observer got an error: " + err);
    }
  }
  
//   observable.subscribe(observer);

// function ComponentOne() {




//     return(
//         <div>hi</div>
//     )
// }



// export default ComponentOne;