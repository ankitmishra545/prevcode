import React, { useEffect } from 'react'
import { from, of } from 'rxjs';
import { printList } from './ServicePage';

function FromOf() {

    const ofObservable$ = of(1,2,3,4);

    let value;

    
    const fromObservable$ = from(["rxjs", "react", "mysql"]);

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("promise resolved")
      },3000)
    })

    const promiseObservable$ = from(promise);

    const stringObservable$ = from("String Observable");

    useEffect(() => {
        ofObservable$.subscribe(res => {
            value = res;
            // console.log(value);
            printList(value, 'listContainer');
        })

        fromObservable$.subscribe(res => {
          // console.log(res);
          printList(res, 'listContainer2')
        })

        promiseObservable$.subscribe(res => {
          console.log(res);
          printList(res, 'listContainer3')
        })

        stringObservable$.subscribe(res => {
          console.log(res);
          printList(res, 'listContainer4')
        })
    },[]) 

  return (
    <div className='allDiv'>        
      <div>
        <h1>Of</h1>
        <div className='col-md-10'>
            <div className='card'>
              <div className='card-header'>of</div>
              <div className='card-body'>
                <ul id='listContainer'></ul>
              </div>
            </div>
        </div>
      </div>        
      <div>
        <h1>From</h1>
        <div className='col-md-10'>
            <div className='card'>
              <div className='card-header'>from</div>
              <div className='card-body'>
                <ul id='listContainer2'></ul>
              </div>
            </div>
        </div>
      </div>        
      <div>
        <h1>From</h1>
        <div className='col-md-10'>
            <div className='card'>
              <div className='card-header'>promise</div>
              <div className='card-body'>
                <ul id='listContainer3'></ul>
              </div>
            </div>
        </div>
      </div>       
      <div>
        <h1>From</h1>
        <div className='col-md-10'>
            <div className='card'>
              <div className='card-header'>string</div>
              <div className='card-body'>
                <ul id='listContainer4'></ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FromOf