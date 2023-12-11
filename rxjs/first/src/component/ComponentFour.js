const { of } = require("rxjs");

 let data$;
const observable$ = setInterval(() => {
     data$ = fetch("https://dummyjson.com/carts")
},100);

const observer = {
    next: value => console.log(value),
    error: err => console.log(err),
    complete: console.log("completed")
}

observable$.subscribe(
    data$.subscribe(observer)
);