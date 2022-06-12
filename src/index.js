import { of, from, fromEvent, interval } from "rxjs";
import {
  map,
  pluck,
  filter,
  reduce,
  take,
  scan,
  tap,
  mergeMap,
  switchMap,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const button = document.getElementById("btn");

const observable = fromEvent(button, "click").pipe(
  // switchMap(
  //   () =>
  //     interval(1000).pipe(
  //       take(6),
  //       tap({
  //         complete() {
  //           console.log("completed!");
  //         },
  //       })
  //     )
  //
  // )

  switchMap(() => ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1"))
);
const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("completed!");
  },
});

console.log("hello");
