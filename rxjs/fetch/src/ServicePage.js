import { Observable, from } from 'rxjs'
import { buttonValue } from './component/ComponentOne';

let data = fetch("https://dummyjson.com/comments")
.then(response => response.json())

// export const dataObservable$ = from(data);

export const dataObservable$ = new Observable(async(subscriber) => {
    let result = await data;
    // console.log(result.comments);
    setTimeout(() => {
        subscriber.next(result);
    },5000)

    // fetch("https://dummyjson.com/comments")
    // .then(response => response.json()).then((result) => {
    //         subscriber.next(result);
    //     })

    
})
