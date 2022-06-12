import { of, from, fromEvent, interval } from "rxjs";
import { map, pluck, filter, reduce, take, scan, tap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const button = document.getElementById("btn");

const observable = fromEvent(button, "click").pipe(
  map(() => {
    return ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1");
  })
);

const subscription = observable.subscribe({
  next(value) {
    value.subscribe(console.log);
  },
  complete() {
    console.log("completed!");
  },
});

console.log("hello");
