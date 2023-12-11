import React, { useEffect, useState } from 'react'
import { from, interval, map } from 'rxjs';
import { printList } from './ServicePage';

function MapComponent() {

    let subscription;
    let subscriptionTwo;

    const [message, setMessage] = useState();
    const [messageTwo, setMessageTwo] = useState();

    const users$ = from([
        {id:1, name: 'ankit'},
        {id:2, name: 'mishra'},
        {id:3, name: 'neeraj'},
        {id:4, name: 'kumar'},
        {id:5, name: 'chandan'},
        {id:6, name: 'ankur'},
        {id:7, name: 'atul'},
    ]);

    useEffect(() => {
        const number = interval(1000);

        subscription = number.pipe(
            map(data => "Message- " + data)
        )
        .subscribe(res => setMessage(res))

        subscriptionTwo = number.pipe(
            map(data => data * 3)
        )
        .subscribe(res => setMessageTwo(res))

        users$.pipe(
            map(data => data.name)
        )
        .subscribe(res => {
            printList(res, 'listContainer');
        })

        setTimeout(() => {
            subscription.unsubscribe();
            subscriptionTwo.unsubscribe();
        },5000)
    },[])

  return (
    <div className='m-3'>
        <h1>Map Operator</h1>
        <br/>
        <div className='d-flex justify-content-around'>
            <div className='col-md-4'>
                <strong>Ex- 01</strong>
                <hr/>
                <p className='bg-light py-2 px-3 border rounded'>
                    <strong>Map:</strong> "Message- " + data
                </p>
                <br/>
                <p className='text-success'><strong>{message}</strong></p>
            </div>
            <div className='col-md-4'>
                <strong>Ex- 02</strong>
                <hr/>
                <p className='bg-light py-2 px-3 border rounded'>
                    <strong>Map: </strong> data * 3
                </p>
                <br/>
                <p className='text-success'><strong>{messageTwo}</strong></p>
            </div>
            <div className='col-md-4'>
                <strong>Ex- 03</strong>
                <hr/>
                <p className='bg-light py-2 px-3 border rounded'>
                    <strong>Map: </strong> from object
                </p>
                <br/>
                <ul id='listContainer'></ul>
            </div>
        </div>
    </div>
  )
}

export default MapComponent