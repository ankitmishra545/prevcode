import React from 'react'
import { from, interval, of, take, toArray } from 'rxjs';

function ToArray() {

    const users = [
        {name: "a", value: 1},
        {name: "b", value: 2},
        {name: "c", value: 3},
        {name: "d", value: 4}
    ]

    const observable$ = interval(1000);

    observable$.pipe(
        take(10),
        toArray()
    )
    .subscribe(res => {
        console.log(res)
    })


    const observable2$ = from(users);
    observable2$.pipe(
        toArray()
    )
    .subscribe(res => {
        console.log(res)
    })

    const observable3$ = of("abc","sdf","qwe","zxc");
    observable3$.pipe(
        toArray()
    )
    .subscribe(res => {
        console.log(res);
    })

  return (
    <div>ToArray</div>
  )
}

export default ToArray