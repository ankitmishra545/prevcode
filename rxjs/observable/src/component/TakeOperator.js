import React, { useEffect } from 'react'
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { printList } from './ServicePage';

function TakeOperator() {

    const colors = ["Red", "Green","Blue","Yellow","Orange","Crimson","Pink","violet"];

    useEffect(() => {
        const source = from(colors);

        source.pipe(
            take(5)
        )
        .subscribe(res => printList(res, 'listContainer'))

        source.pipe(
            takeLast(5)
        )
        .subscribe(res => printList(res, 'listContainer2'))

        const source1 = interval(1000);

        let condition = timer(5000);
        let condition2 = fromEvent(document,"click");

        source1.pipe(
            takeUntil(condition2)
        )
        .subscribe(res => printList(res, 'listContainer3'))
    })
  return (
    <div className='m-3'>
        <h1>Take, TakeLast, TakeUntil</h1>
        <br/>
        <div className='d-flex justify-content-around'>
            <div className='col-md-4'>
                <strong>Ex- 01: </strong> take
                <hr/>
                <ul id='listContainer'></ul>
            </div>
            <div className='col-md-4'>
                <strong>Ex- 01: </strong> take
                <hr/>
                <ul id='listContainer2'></ul>
            </div>
            <div className='col-md-4'>
                <strong>Ex- 01: </strong> take
                <hr/>
                <ul id='listContainer3'></ul>
            </div>
        </div>
    </div>
  )
}

export default TakeOperator