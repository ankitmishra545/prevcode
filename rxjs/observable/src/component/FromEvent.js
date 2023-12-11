import React, { useEffect, useRef } from 'react'
import { Subscription, fromEvent } from 'rxjs'

function FromEvent() {

    const buttonRef = useRef();  
    let count = 1;

    const observer = {
        next: () => {
            let vedioVal = "Vedio " + count++;
            printList(vedioVal);
        },
        error: error => console.log(error),
        complete: () => console.log("completed")
    }

 let subscription;
    useEffect(() => {
        const clickObservable$ = fromEvent(buttonRef.current, "click");
        subscription = clickObservable$.subscribe(observer);
    }, [])

    const printList = (val) => {
        let list  = document.createElement("li");
        list.innerText = val;

        document.getElementById("listContainer").appendChild(list);
        // subscription.unsubscribe();
    }

    return (
        <div>
            <h1>From Event</h1>
            <div className='col-md-4'>
                <div className='card'>
                    <div className='card-header'>Add Number</div>
                    <div className='card-body'>
                        <button className='btn btn-primary' ref={buttonRef}>Add</button>
                    </div>
                    <ul id='listContainer'></ul>
                </div>
            </div>
        </div>
    )
}

export default FromEvent