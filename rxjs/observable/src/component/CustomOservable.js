import React, { useEffect, useState } from 'react'
import { Observable, Subscription } from 'rxjs'
import { printList } from './ServicePage'

function CustomOservable() {

    let [status, setStatus]=useState("");
    let [status2, setStatus2]=useState("");
    let [name, setName]=useState("");
    let [nameStatus, setNameStatus]=useState("");

    let subscription; // let subscription = Subscription

    const observable$ = new Observable(subscriber => {
        setTimeout(() => {
            subscriber.next("React");
        },1000)
        setTimeout(() => {
            subscriber.next("Rxjs");
        },2000)
        setTimeout(() => {
            subscriber.next("Nodejs");
        },3000)
        setTimeout(() => {
            subscriber.next("Mysql");
            subscriber.error("error occurred");
        },4000)
        setTimeout(() => {
            subscriber.next("Angular");
        },5000)
        setTimeout(() => {
            subscriber.next("Nextjs");
            // subscriber.complete();
        },6000)
    })

    useEffect(() => {
        observable$.subscribe(res => {
            console.log(res);
            printList(res, "listContainer")},
            error => {
                setStatus("error")
                console.log(error);
            }
        )

        subscription = observable2$.subscribe(res => {
                printList(res, 'listContainer2');
            },
            error => {console.log(error)},
            () => {
                setStatus2("completed");
                console.log("Completed")}
        )

        observable3$.subscribe(res => {
            setName(res);
        },
        error => {
            setNameStatus("error");
            console.log(error)},
        () => {
            setNameStatus("completed");
            console.log("Completed")})
    },[])

    useEffect(() => {
        return () => {
             subscription.unsubscribe(); // using this when not in component then data is not emmitting because we unsubscribe it when component unloads
        }
    },[])

    const array = ["React", "Javascript", "Angular", "NodeJS", "MySQL"]
    const observable2$ = Observable.create(subscriber => {
        let count=0;
        setInterval(() => {
            subscriber.next(array[count]);
            count++;
            if(count >= 5){
                subscriber.complete();
            }
        }, 1000)
    })    

    const arrayTwo = ['ABC','QWE','ASD','ZXC','FGH','CVB','QAZ'];
    const observable3$  = new Observable(subscriber => {
        let count = 0;
        setInterval(() => {
            subscriber.next(arrayTwo[count]);
            count++;
            if(count >= 7){
                // subscriber.complete();
                subscriber.error("error occurred");
            }
        }, 2000)
    })

  return (
    <div className='my-3'>
        <h1>Custom Observable</h1>
        <br/>
        <div className='d-flex justify-content-around'>
            <div className='col-md-4'>
                <strong>Ex- 01 (Manual)</strong>
                <hr/>
                <ul className={`manualList ${status === "error" ? "error" : status === "completed" ? "completed" : ""}`} id='listContainer'></ul>
            </div>
            <div className='col-md-4'>
                <strong>Ex- 02 (Custom Interval Observable)</strong>
                <hr/>
                <ul className={`manualList ${status2 === "error" ? "error" : status2 === "completed" ? "completed" : ""}`} id='listContainer2'></ul>
            </div>
        </div>
        <br/>
        <div className='col-md-12'>
            <p className='bg-light py-2 px-3 border rounded'>
                <strong>Ex- 03 Random Names: </strong> 'ABC','QWE','ASD','ZXC','FGH','CVB','QAZ'
            </p>
            <hr/>
            <p>Current Name : <strong>{name}</strong></p>
            <span className={`badge ${nameStatus === "error" ? "text-bg-danger" : nameStatus === "completed" ? "text-bg-success" : "text-bg-primary"}`}>{nameStatus === "error" ? "Error" : nameStatus === "completed" ? "Completed" : "Running"}</span>            
        </div>
    </div>
  )
}

export default CustomOservable