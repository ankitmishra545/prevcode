import React, { useEffect, useState } from 'react'
import { from, interval, map, mapTo, tap } from 'rxjs';
import { printList } from './ServicePage';

function TapOperator() {

    let subscription;
    let subscription2;
    const [myColor, setMyColor] = useState();

    useEffect(() => {

        const array = ["React", "Javascript", "Angular", "NodeJS", "MySQL"];
        const source = interval(1000);
        subscription = source.pipe(
            tap(res => {
                if(res === 4){
                    subscription.unsubscribe();
                }
            }),
            map(data => array[data])
        )
        .subscribe(res => printList(res, 'listContainer'))


        const colors = ["Red", "Green","Blue","Yellow","Orange","Crimson","Pink","violet"];
        subscription2 = source.pipe(
            tap(res => {
                setMyColor(colors[res]);
                if(res === 7){
                    subscription2.unsubscribe();
                }
            }),
            map(data => colors[data])
        )
        .subscribe(res => printList(res, 'listContainer2'))

    },[])
  return (
    <div className='m-3' style={{color: myColor}}>
        <h1>Tap Operator</h1>
        <div className='d-flex justify-content-around'>
            <div className='col-md-5'>
                <strong>Ex- 01</strong>
                <hr/>
                <ul id='listContainer'></ul>
            </div>
            <div className='col-md-5'>
                <strong>Ex- 02</strong>
                <hr/>
                <ul id='listContainer2'></ul>
            </div>
        </div>
    </div>
  )
}

export default TapOperator