// import { map, of } from "rxjs";

const { map, of, from, Observable, BehaviorSubject, first } = require("rxjs");

{/*let observable$ = new BehaviorSubject ((subscriber) => {
    subscriber.next([1,2,3])
}).pipe(
    map((value) => value.map(element => element * element) )
)
observable$.next([4,5,6])
*/} // printing latest updates   

{/*const observable$ = new Observable ((subscriber) => {
    subscriber.next([1,2,3])
}).pipe(
    map((value) => value.map(element => element * element) )
)*/}

const observable$ = of(10, 20, 30, 40).pipe(
    map(value => value * value)
) // in this creation operator complete execting automaticaly

const observer = {
    next: value => console.log("Square value set of observable: " + value),
    error: error => console.log("Observable sends JS error: " + error),
    complete: () => console.log("Oservable exection completed")
}

observable$.subscribe(observer);

// observable$ getting new array not original one
const firstObservable$ = observable$.pipe(
    map(value => value),
    first()
)

firstObservable$.subscribe(observer);



